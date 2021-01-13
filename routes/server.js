import {Router} from 'express'
import {getAll} from '../controllers/servers.js'
const router = Router()


router.get('/', (req,res) => {
    res.render('main', {title: 'Main page', active:'main'})
})
 
router.get('/about', (req,res) => {
    res.render('about', {title: 'About page', active:'about'})
})

//router.get('/api/server', (req,res) => {
//   res.json({test:52})
//})
router.get('/api/server', getAll)

export default router;