"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_s3_1 = __importDefault(require("multer-s3"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const s3_util_1 = __importDefault(require("../utilis/s3.util"));
const upload = (0, multer_1.default)({
    storage: (0, multer_s3_1.default)({
        s3: s3_util_1.default,
        bucket: process.env.AWS_BUCKET,
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        key: (req, file, cb) => {
            const fileName = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
            cb(null, `${fileName}${path_1.default.extname(file.originalname)}`);
        }
    })
});
exports.default = upload;
