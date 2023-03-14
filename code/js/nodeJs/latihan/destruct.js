const score=[80,70,20,100]
// const math=score[0]
// const science=score[1]
const [math,sc,phy,ind]=score;

console.log(math)
const obj1={
    firstName:"jon",
    lastName:"doe",
    fullName:function(){
        return `${this.firstName} ${this.lastName}`
    }
}
//ini destruct ":" = as
const {firstName:name,lastName}=obj1
console.log(name)