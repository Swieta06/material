const fetch = require("node-fetch"); //variable import
async function getData(id) {
  try {
    const result = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const json = await result.json();
    //console.log(json.name);
    const obj1 = {
      hobi: "Makan",
    };
    let obj = { ...json, ...obj1 };
    console.log(obj);

    // for (let i = 0; i < json.length; i++) {
    //   console.log(json[i].name);
    // }
  } catch (err) {
    console.log(err.message);
  }
}

function condition(id) {
  let conv = parseInt(id);
  // console.log(id);
  //console.log(typeof(conv))
  if (conv >= 0) {
    //  let conv2 = conv.toString;
    getData(`${id}`);
  } else {
    console.log("gak boleh minus");
  }
}
//
//let active= true
function inputan() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // let pattern = /[0-9]/g;
  // let result = id.match(pattern);

  
  readline.question(`ketik Id : `, (id) => {
    let conv = parseInt(id);
    // console.log(id);
    //console.log(typeof(conv))
    if (conv >= 0) {
      //  let conv2 = conv.toString;
      getData(`${id}`);
    } else {
      console.log("gak boleh minus");
    }

    //condition(id)
    readline.close();
    //inputan()
    //readline.close();
  });
}

inputan();
// const wait = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve(inputan());
//   }, 1000);
// });
