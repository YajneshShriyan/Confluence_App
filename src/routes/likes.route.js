const express = require('express');
const auth = require('../middlewares/auth');
const { likeController } = require('../controllers');

const router = express.Router();

router.route('/').post(auth(), likeController.createLike);

router.route('/:id').put(auth(), likeController.updateLike).delete(auth(), likeController.deleteLike);

router.get('/all/:userId', auth(), likeController.getLike);

module.exports = router;
