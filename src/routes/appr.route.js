const express = require('express');
const auth = require('../middlewares/auth');
const { apprController } = require('../controllers');

const router = express.Router();

router.route('/').post(auth(), apprController.createAppr);
router
  .route('/:id')
  .get(auth(), apprController.getApprById)
  .put(auth(), apprController.updateAppr)
  .delete(auth(), apprController.deleteAppr);

router.get('/all/:userId', apprController.getApprs);

module.exports = router;
