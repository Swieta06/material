const pg=require('pg')
const db=new pg.Pool({
    connectionString:'postgresql://postgres:postgres@localhost:5432/postgres',
})
db.connect().then(()=>{
    console.log('DB Connected')
}).catch(()=>{
    console.log('DB Failed to Connect')
})
module.exports=db