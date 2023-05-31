const express = require('express');
const auth = require('../middlewares/auth');
const { pageController } = require('../controllers');

const router = express.Router();

router.route('/').post(auth(), pageController.createPage);

router
  .route('/:id')
  .get(auth(), pageController.getPageById)
  .put(auth(), pageController.updatePageById)
  .delete(auth(), pageController.deletePage);

router.get('/all/:userId', auth(), pageController.getPagesByUserId);

module.exports = router;
