const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/Users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:UserId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/Users/:UserId/friends
router.route('/:userId/friends').post(addFriend);

// /api/Users/:UserId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
