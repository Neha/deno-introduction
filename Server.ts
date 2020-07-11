/*

#3 Deno Servers

- Modules from URLs (can be hosted on GitHub or any internal/private URL)
- Server

on command line type: deno run --allow-net server.ts

*/


import { serve } from 'https://deno.land/std@0.50.0/http/server.ts';

for await (const req of serve({ port: 8000 })) {
  req.respond({ body: "Hello Deno" });
  console.log('Running at....')
}