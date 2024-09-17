const mongoose = require('mongoose');
async function connect(){
    try{
     let connection=await mongoose.connect('mongodb://localhost:27017/batch-2');
     console.log("Data base connected")
    }catch(err){
        console.log(err.message, 'msg...')

    }
}
module.exports = connect