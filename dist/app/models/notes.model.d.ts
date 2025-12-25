import { Schema } from "mongoose";
import { INotes } from "../interfaces/notes.interface";
export declare const Note: import("mongoose").Model<INotes, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, INotes, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<INotes & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<INotes, import("mongoose").Model<INotes, any, any, any, import("mongoose").Document<unknown, any, INotes, any, import("mongoose").DefaultSchemaOptions> & INotes & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any, INotes>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, INotes, import("mongoose").Document<unknown, {}, INotes, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<INotes & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    title?: import("mongoose").SchemaDefinitionProperty<string, INotes, import("mongoose").Document<unknown, {}, INotes, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<INotes & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    content?: import("mongoose").SchemaDefinitionProperty<string, INotes, import("mongoose").Document<unknown, {}, INotes, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<INotes & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    category?: import("mongoose").SchemaDefinitionProperty<"personal" | "work", INotes, import("mongoose").Document<unknown, {}, INotes, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<INotes & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    pinned?: import("mongoose").SchemaDefinitionProperty<boolean, INotes, import("mongoose").Document<unknown, {}, INotes, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<INotes & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    userId?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, INotes, import("mongoose").Document<unknown, {}, INotes, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & Omit<INotes & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, INotes>, INotes>;
//# sourceMappingURL=notes.model.d.ts.map