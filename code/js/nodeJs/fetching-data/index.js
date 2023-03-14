const fetch = require("node-fetch"); //variable import
async function getData() {
  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const json = await result.json();
    // console.log(json);

    for (let i = 0; i < json.length; i++) {
      console.log(json[i].name);
    }
  } catch (err) {
    console.log(err.message);
  }
}

getData();
