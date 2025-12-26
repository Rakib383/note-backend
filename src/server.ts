
import type {Server} from 'http';
import app from './app';
import mongoose from 'mongoose';
import 'dotenv/config';

let server:Server;

const port = process.env.PORT || 3000;
const database = process.env.DATABASE_URL;

async function main () {
    try{
        await mongoose.connect(`${database}`);
        console.log('connected to db');

        server = app.listen(port,()=> {
            console.log(`app is listening on port ${port}`);
        })

    }catch (error) {

        console.log(error);
    }
}

main()