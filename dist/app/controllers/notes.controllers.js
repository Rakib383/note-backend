"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesRoutes = void 0;
const notes_model_1 = require("../models/notes.model");
const express_1 = __importDefault(require("express"));
exports.notesRoutes = express_1.default.Router();
exports.notesRoutes.post("/create-note", async (req, res) => {
    const body = req.body;
    console.log(body);
    const note = await notes_model_1.Note.create(body);
    res.status(201).json({
        success: true,
        note
    });
});
exports.notesRoutes.get("/", async (req, res) => {
    const notes = await notes_model_1.Note.find().populate("userId");
    res.status(201).json({
        success: true,
        notes
    });
});
exports.notesRoutes.get("/:noteId", async (req, res) => {
    const note = await notes_model_1.Note.findById(req.params.noteId);
    res.status(201).json({
        success: true,
        note
    });
});
exports.notesRoutes.patch("/:noteId", async (req, res) => {
    const noteId = req.params.noteId;
    const updatedBody = req.body;
    const note = await notes_model_1.Note.findByIdAndUpdate(noteId, updatedBody);
    res.json({
        success: true,
        message: "note updated"
    });
});
//# sourceMappingURL=notes.controllers.js.map