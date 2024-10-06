import { Router } from 'express'
import multer from 'multer'

import { addNewPicture, deletePicture, getPicture } from '../controllers/picturesController.js'

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

router.post('/', upload.any(), addNewPicture); 

router.get('/', getPicture);
router.delete('/', deletePicture);

export default router;