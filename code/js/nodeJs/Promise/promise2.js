const great = new Promise((resolve, reject) => {
    // reject('error')
  setTimeout(() => {
    resolve(`after 1 second`);
  }, 1000);
});
async function processAsync() {
  try {
    const result = await great;
    console.log(result);
  } catch(err) {
    console.log(err)
  }
}
processAsync();
