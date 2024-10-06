import { Router } from 'express'
import { login, signup, getAll, deleteById, getById } from '../controllers/usersController.js';
import itemsRoute from './itemsRouter.js'
import profileRouter from './profileRouter.js'
import checkToken from '../middlewares/checkToken.js';
import picturesRouter from './picturesRouter.js';

const router = Router();

 
router.post('/login', login);
router.post('/signup', signup);

router.get('/', getAll);
router.get('/:user_id', getById)
router.delete('/:user_id', deleteById)

router.use('/:user_id/items', checkToken, itemsRoute);
router.use('/:user_id/profile', checkToken, profileRouter);
router.use('/:user_id/images', picturesRouter);


export default router;