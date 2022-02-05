/**
 * fetch api
 */

const res = await fetch("https://api.github.com/users/github");
const data = await res.json();
console.log(data);
