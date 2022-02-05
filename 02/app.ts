// import { serve } from "https://deno.land/std@0.125.0/http/server.ts";
// console.log("http://localhost:8000/");
// serve((req) => new Response("Hello World\n"), { port: 8000 });

/**
 * reading files
 */
// const decoder = new TextDecoder("utf-8");
// const data = await Deno.readFile("readme.txt");
// console.log(decoder.decode(data));
const data = await Deno.readTextFile("readme.txt");
console.log(data);

/**
 * writing files
 */
// const encoder = new TextEncoder();
// const text = encoder.encode("Hello again, hodahiris");
// Deno.writeFile("readme.txt", text);
const text = "Hello again Hodahiris";
Deno.writeTextFile("readme.txt", text);

/**
 * renameming and removing files
 */
await Deno.rename("readme.txt", "readme.md");
await Deno.remove("readme.md");
