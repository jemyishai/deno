// https://github.com/asos-craigmorten/deno-react-base-server



// Import deno-react-base-server
import baseServer from "https://raw.githubusercontent.com/asos-craigmorten/deno-react-base-server/master/mod.tsx";

// Update `appModulePath` from the example React component to your own.
baseServer({
  appModulePath:
  'https://gist.githubusercontent.com/jemyishai/43c056c05f6b2cb6454234cc38aa16db/raw/26dc4a63e6b87b90e761e75fe6197b1ff5230790/App.tsx',
  port: 3000,
});
