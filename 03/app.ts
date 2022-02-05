/**
 * uuid
 */
import { v4 } from "https://deno.land/std@0.125.0/uuid/mod.ts";

const uid = v4.generate();
console.log(uid);

/**
 * fs module
 */
// import { readJson, } from "https://deno.land/std@0.125.0/fs/mod.ts";
import { readJson, writeJson } from "https://deno.land/x/jsonfile/mod.ts";

const jsonObj = await readJson("./03/ninja.json");
console.log(jsonObj);

const books = [
  { title: "Book 1", author: "John" },
  { title: "Book 2", author: "Jane" },
];

await writeJson("./03/books.json", books);
