import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { getDogs, getDog, updateDog, removeDog, addDog } from './routingCallbacks.ts';

const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || '127.0.0.1';

const router = new Router();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);

router
	.get('/dogs', getDogs)
	.get('/dogs/:name', getDog)
	.post('/dogs', addDog)
	.put('/dogs/:name', updateDog)
	.delete('/dogs/:name', removeDog);

await app.listen(`${HOST}:${PORT}`);
