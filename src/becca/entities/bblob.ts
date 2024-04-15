import AbstractBeccaEntity = require("./abstract_becca_entity");
import { BlobRow } from "./rows";

// TODO: Why this does not extend the abstract becca?
class BBlob extends AbstractBeccaEntity<BBlob> {
    static get entityName() { return "blobs"; }
    static get primaryKeyName() { return "blobId"; }
    static get hashedProperties() { return ["blobId", "content"]; }

    blobId!: string;
    content!: string | Buffer;
    contentLength!: number;
    dateModified!: string;
    utcDateModified!: string;

    constructor(row: BlobRow) {
        super();
        this.updateFromRow(row);
    }

    updateFromRow(row: BlobRow): void {
        this.blobId = row.blobId;
        this.content = row.content;
        this.contentLength = row.contentLength;
        this.dateModified = row.dateModified;
        this.utcDateModified = row.utcDateModified;
    }

    getPojo() {
        return {
            blobId: this.blobId,
            content: this.content || null,
            contentLength: this.contentLength,
            dateModified: this.dateModified,
            utcDateModified: this.utcDateModified
        };
    }
}

export = BBlob;