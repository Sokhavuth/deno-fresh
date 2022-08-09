// setting.js

function setting(){
    const configure = {
        site_title: "Multimedia",
        page_title: "Home",
        message: "",
    }

    return configure
}


import { config } from "config";
await config({export: true});
const secret_key = Deno.env.get("SECRET_KEY");
 
 
import { MongoClient } from "mongodb";
const client = await new MongoClient();
await client.connect(Deno.env.get('DATABASE_URI'));
const mymongo = client.database(Deno.env.get('DB_NAME'));
 
 
import { connect } from "redis"
const myredis = await connect({
    hostname: Deno.env.get('REDIS_URI'),
    port: parseInt(Deno.env.get('REDIS_PORT')),
    password: Deno.env.get('REDIS_PASSWORD'),
});


export { setting, secret_key, mymongo, myredis }