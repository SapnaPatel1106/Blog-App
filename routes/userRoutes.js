const express = require('express');
const router= express.Router();
const user = require('../controllers/userController');
const {upload} = require('../middlewares/imageStorage')
const auth = require('../middlewares/authMiddleware')
const validation = require('../validation/users/userValidation')


router.post(
    '/registeruser',
    upload.single("profilePic"),
    validation.registerUserValidation,
    user.registerUser
);
router.post(
    '/loginuser',
    validation.loginUserValidation,
    user.loginUser
);
router.post(
    '/sendemail',
    auth.checkUserAuth,
    user.resetPasswordSendEmail
);
router.post(
    '/updatepassword/:id/:token',
    user.updatePassword
);

module.exports = router;
