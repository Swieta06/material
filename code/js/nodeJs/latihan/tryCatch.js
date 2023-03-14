function div(a,b){
    if(b===0){
        throw new Error("cant")

    }
return a/b
}

try{
    let num =div(3,1)
    console.log(num)
    
}catch{
        console.log("cant caount")
    }