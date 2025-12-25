"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const notes_model_1 = require("./notes.model");
const addressSchema = new mongoose_1.Schema({
    city: { type: String },
    street: { type: String },
    zip: { type: Number }
}, {
    _id: false
});
const userSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String
    },
    role: {
        type: String,
        enum: { values: ['user', 'admin'], message: "you are wrong" },
        default: "user"
    },
    address: {
        type: addressSchema
    }
}, {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});
userSchema.virtual('fullname').get(function () {
    return `${this.firstName} ${this.lastName}`;
});
userSchema.method("hashPassword", async function (plainPassword) {
    const password = await bcryptjs_1.default.hash(plainPassword, 10);
    return password;
});
userSchema.static("hashPassword", async function (plainPassword) {
    const password = await bcryptjs_1.default.hash(plainPassword, 10);
    return password;
});
userSchema.pre('save', async function () {
    this.password = await bcryptjs_1.default.hash(this.password, 10);
});
userSchema.post("findOneAndDelete", async function (doc) {
    console.log(doc);
    await notes_model_1.Note.deleteMany({ userId: doc._id });
});
exports.User = (0, mongoose_1.model)("user", userSchema);
//# sourceMappingURL=user.model.js.map