const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  removeThought,
} = require('../../controllers/userController');

// /api/Users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:UserId
router.route('/:UserId').get(getSingleUser).delete(deleteUser);

// /api/Users/:UserId/Thoughts
router.route('/:userId/thoughts').post(addThought);

// /api/Users/:UserId/Thoughts/:ThoughtId
router.route('/:userId/thoughts/:thoughtId').delete(removeThought);

module.exports = router;
