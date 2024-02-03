import { Schema, model } from "mongoose";

export const DocumentSchema = new Schema({
    _id: String,
    data: Object
})

const Document = model("Document", DocumentSchema);

export default Document;