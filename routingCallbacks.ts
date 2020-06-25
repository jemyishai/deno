import dogs from './data.ts';

//scaffolding - this needs to be adjusted
let doggos = dogs;

export const getDogs = ({ response }: { response: any }) => {
	response.status = 200;
	response.body = doggos;
};

export const getDog = ({
	params,
	response,
}: {
	params: {
		name: string;
	};
	response: any;
}) => {
	const dog = doggos.filter((dog) => dog.name === params.name);
	if (dog.length) {
		response.status = 200;
		response.body = doggos[0];
		return;
	}

	response.status = 400;
	response.body = { msg: `Cannot find dog ${params.name}` };
};

export const removeDog = ({
	params,
	response,
}: {
	params: {
		name: string;
	};
	response: any;
}) => {
	const lengthBefore = doggos.length;
	doggos = doggos.filter((dog) => dog.name !== params.name);

	if (dogs.length === lengthBefore) {
		response.status = 400;
		response.body = { msg: `Cannot find dog ${params.name}` };
		return;
	}

	response.body = { msg: 'OK' };
	response.status = 200;
};

export const addDog = async ({ request, response }: { request: any; response: any }) => {
	const body = await request.body();
	const { name, age }: { name: string; age: number } = body.value;
	dogs.push({
		name: name,
		age: age,
	});

	response.body = { msg: 'OK' };
	response.status = 200;
};

export const updateDog = async ({
	params,
	request,
	response,
}: {
	params: {
		name: string;
	};
	request: any;
	response: any;
}) => {
	const temp = dogs.filter((existingDog) => existingDog.name === params.name);
	const body = await request.body();
	const { age }: { age: number } = body.value;

	if (temp.length) {
		temp[0].age = age;
		response.status = 200;
		response.body = { msg: 'OK' };
		return;
	}

	response.status = 400;
	response.body = { msg: `Cannot find dog ${params.name}` };
};
