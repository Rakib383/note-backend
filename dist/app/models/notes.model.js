"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
const noteSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    content: { type: String, default: '' },
    category: {
        type: String,
        enum: ["personal", "work"],
        default: 'personal'
    },
    pinned: {
        type: Boolean,
        default: false
    },
    userId: { type: mongoose_1.Schema.Types.ObjectId,
        ref: "user"
    }
}, { versionKey: false, timestamps: true });
exports.Note = (0, mongoose_1.model)("Note", noteSchema);
//# sourceMappingURL=notes.model.js.map