function prosesData(){
    return 1+1
}
console.log(prosesData())
function prosesData2(num1,num2){
    return num1+num2
}
console.log(prosesData2(10,2))

const proses=function(nomor1,nomor){
    return this.nomor1+this.nomor
}
console.log(proses(9,9))

const arrow=()=>{
    return 1+1
}
console.log(arrow())

const obj={
    nomor1:10,
    nomor:12,
    calc:proses
}
console.log(obj.calc())