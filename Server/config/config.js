const config = {
    local : {
        db :{
            host : "localhost",
            port : "27017",
            databaseName : "siddhant",
            userName:"",
            password:""
        },
        EMAIL:{
            host:'smtp.gmail.com',
            port:465,
            username: 'azmsiddhant1@gmail.com',
            password: 'khghxqhczbsezjtd'  
        },
        client_secret_key:"thsgsjs"
    },
    staging:{
        db :{
            host :"172.10.1.3",
            port :"27017",
            databaseName :"siddhantsingh", 
            userName :"siddhantsingh",
            password :"siddhantsingh87"
        },
        EMAIL:{
            host:'smtp.gmail.com',
            port:465,
            username: 'azmsiddhant1@gmail.com',
            password: 'khghxqhczbsezjtd'  
        },api_port:9898
    },
    production : {
        db :{
            host:"portfolio.vvtk3gi.mongodb.net",
            port:"27017",
            MOONGOOSE : {
              useUndefinedTopology:true,
              useNewUrlParser: true,  
            },
            databaseName:"contacts",
            userName:"azmsiddhant1",
            password:"c8ycaWLAjBIO2yc8"
        },api_port:2345
    }
}
export const get = function get(env){
    return config [env];
}
