import { Types } from "mongoose";
export interface INotes {
    title: string;
    content: string;
    category: "personal" | "work";
    pinned: boolean;
    userId: Types.ObjectId;
}
//# sourceMappingURL=notes.interface.d.ts.map