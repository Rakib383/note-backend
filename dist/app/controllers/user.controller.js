"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_model_1 = require("../models/user.model");
const zod_1 = __importDefault(require("zod"));
exports.userRoutes = express_1.default.Router();
const createUserZodSchema = zod_1.default.object({
    firstName: zod_1.default.string(),
    lastName: zod_1.default.string(),
    email: zod_1.default.string(),
    password: zod_1.default.string(),
    role: zod_1.default.enum(["user", "admin"]).default("user")
});
exports.userRoutes.post("/create-user", async (req, res) => {
    // const body = await createUserZodSchema.parseAsync(req.body);
    const password = await user_model_1.User.hashPassword(req.body.password);
    req.body.password = password;
    const user = await user_model_1.User.create(req.body);
    // const user = new User(req.body);
    // const password = await user.hashPassword(req.body.password)
    // await user.save();
    res.status(201).json({
        success: true,
        user
    });
});
exports.userRoutes.get("/", async (req, res) => {
    const users = await user_model_1.User.find();
    res.status(201).json({
        success: true,
        users
    });
});
exports.userRoutes.get("/:userId", async (req, res) => {
    const user = await user_model_1.User.findById(req.params.userId);
    res.status(201).json({
        success: true,
        user
    });
});
exports.userRoutes.patch("/:userId", async (req, res) => {
    const UserId = req.params.userId;
    const updatedBody = req.body;
    const user = await user_model_1.User.findByIdAndUpdate(UserId, updatedBody);
    res.json({
        success: true,
        message: "User updated"
    });
});
exports.userRoutes.delete("/:userId", async (req, res) => {
    const userId = req.params.userId;
    const user = await user_model_1.User.findOneAndDelete({ _id: userId });
    res.status(201).json({
        success: true,
        message: "user deleted",
        user
    });
});
//# sourceMappingURL=user.controller.js.map