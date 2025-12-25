
import type {Server} from 'http';
import app from './app';
import mongoose from 'mongoose';

let server:Server;

async function main () {
    try{
        await mongoose.connect('mongodb+srv://coffeeMaster:hthyl9FAq23BZzEq@cluster1.25zkwku.mongodb.net/advanced-note-app?appName=Cluster1');
        console.log('connected to db');

        server = app.listen(3000,()=> {
            console.log(`app is listening on port ${3000}`);
        })

    }catch (error) {

        console.log(error);
    }
}

main()