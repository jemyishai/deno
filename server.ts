/**
 *     import { serve } from "https://deno.land/std/http/server.ts";
 *     const body = "Hello World\n";
 *     const s = serve({ port: 8000 });
 *     for await (const req of s) {
 *       req.respond({ body }); 'localhost:4200'
 *     }
 */
export function serve(addr: string | HTTPOptions): Server {
  if (typeof addr === "string") {
    const [hostname, port] = addr.split(":");
    addr = { hostname, port: Number(port)  };
  }

  const listener = listen(addr);
  return new Server(listener);
}

// export interface HTTPOptions {
//   hostname: string;
//   port: number;
// }
