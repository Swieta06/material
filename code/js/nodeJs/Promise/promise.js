const wait=new Promise((resolve,reject)=>{
console.log(" after 1 scnd");
},1000)
wait.then((result)=>{
console.log(result)
}).catch((err)=>{
console.log(err)
})

//promise 1