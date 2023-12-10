const express = require('express');
const router = express.Router();
const uploadFiles = require('../middlewares/uploadFiles');
const validateInput = require('../middlewares/validator');
const {body}= require ('express-validator')


const controllers = require('../controllers/adminControllers');

const login =[
    body('email')
    .isEmail()
    .withMessage('Necesito que ingrese un correo valido'),
    body('password')
    .isLenght({min:6})
    .isAlphanumeric()
    .withMessage('La contraseña debe tener al menos 6 caracteres y contener letras y numeros.')
]

router.get('/', controllers.adminView);
router.get('/create', controllers.createView);
router.post('/create', uploadFiles.array('images',2), controllers.createItem);
router.get('/create/bulk', controllers.bulkCreate);
router.get('/edit/:id', controllers.editView);
router.put('/edit/:id', controllers.editItem);
router.delete('/delete/:id', controllers.deleteItem);
router.get('/login', controllers.loginView);
router.post('/login', loginValidations, validateInput, loginController.loginUser);
router.post('/login', controllers.loginUser);
router.get('/register', controllers.registerView);
router.post('/register', controllers.registerUser);

module.exports = router;