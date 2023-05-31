const express = require('express');
const auth = require('../middlewares/auth');
const { friendController } = require('../controllers');

const router = express.Router();

router.route('/').post(auth(), friendController.createFriend);

router.get('/:userId', auth(), friendController.getFriend);

router.route('/:id').put(auth(), friendController.updateFriend).delete(auth(), friendController.deleteFriend);

module.exports = router;
