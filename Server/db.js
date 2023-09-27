import mongoose from 'mongoose';


import 'dotenv/config'
var mongoUrl = process.env.Node_env ;


var config = require('./config/config');
var configdata = config.get('local').db;
// console.log(configdata)
var mongoUrl = `mongodb://${configdata.host}:${configdata.port}/${configdata.databaseName}`;

var options= {
    user:configdata.userName,
    pass:configdata.password
}
export const mongoconnection = async() => {
    try{
        await mongoose.connect(mongoUrl,options)
        console.log("Connect to DB");
    }
    catch(e){
        console.log(e);
        throw e
}
}