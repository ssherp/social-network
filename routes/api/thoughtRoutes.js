const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/Thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought);
  
  router
  .route('/:thoughtId')
  .delete(deleteThought);

 router
 .route('/:thoughtId/reactions')
 .post(createReaction);
 
 router
 .route('/:thoughtId/reactions/:reactionId')
 .delete(deleteReaction),

module.exports = router;
