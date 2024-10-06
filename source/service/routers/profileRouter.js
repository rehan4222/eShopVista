import { Router } from 'express'
import { getProfileById, updateProfile, changePassword } from '../controllers/profileController.js'


const router = Router({ mergeParams: true })
 
router.get('/', getProfileById)
router.patch('/', updateProfile)
router.patch('/changepassword', changePassword)

export default router