import Document, { DocumentSchema as DocumentType } from "../models/Document";

export const findOrCreateDocument = async (id: string): Promise<{ error: string | undefined, document: DocumentType | undefined }> => {
    if (id === null) return { error: "ID not defined", document: undefined };

    try {
        const document = await Document.findById(id);
        if (document) {
            return { error: undefined, document };
        }

        const newDocument = await Document.create({ _id: id, data: "" }) as DocumentType;
        return { error: undefined, document: newDocument };
    } catch (error) {
        return { error: (error as Error).message, document: undefined };
    }
};
