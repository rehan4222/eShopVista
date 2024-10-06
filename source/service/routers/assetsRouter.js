import { Router } from 'express'
import multer from 'multer'

import { addNewImage,  deleteImage,  getImage } from '../controllers/assetsController.js'

const router = Router({ mergeParams: true });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './assets/pics');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });

router.post('/', upload.any(), addNewImage); 

router.get('/', getImage);
router.delete('/', deleteImage);

export default router;