import multerS3 from "multer-s3"
import multer from "multer"
import path from "path"
import s3 from "../utilis/s3.util"

const upload = multer({
    storage : multerS3({
        s3 ,
        bucket: process.env.AWS_BUCKET as string,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: (req, file, cb) => {   
            const fileName = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
            cb(null, `${fileName}${path.extname(file.originalname)}`);
        }
    })
})

export default upload