const wait = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(`after one scnd`);
  }, 1000);
});
