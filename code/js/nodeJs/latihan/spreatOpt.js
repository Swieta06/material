const arr1=[1,2,3]
const arr2=[3,4,5]

const obj1={
    firstName:"jon",
    lastName:"doe",
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    }
}
const obj2={
   age:"20",
  
}

const obj={...obj1,...obj2}
console.log(obj)
console.log(obj.fullName())