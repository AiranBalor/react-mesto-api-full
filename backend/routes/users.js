const router = require('express').Router();
const {
  getUsers, getUser, updateUser, updateAvatar, getMyUser,
} = require('../controllers/users');
const {
  validateId,
  validateUserDescription,
  validateUserAvatar,
} = require('../middlewares/validation');

router.get('/', getUsers);
router.get('/:userId', validateId, getUser);
router.get('/me', getMyUser);
router.patch('/me', validateUserDescription, updateUser);
router.patch('/me/avatar', validateUserAvatar, updateAvatar);

module.exports = router;
