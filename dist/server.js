"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
let server;
async function main() {
    try {
        await mongoose_1.default.connect('mongodb+srv://coffeeMaster:hthyl9FAq23BZzEq@cluster1.25zkwku.mongodb.net/advanced-note-app?appName=Cluster1');
        console.log('connected to db');
        server = app_1.default.listen(3000, () => {
            console.log(`app is listening on port ${3000}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
main();
//# sourceMappingURL=server.js.map