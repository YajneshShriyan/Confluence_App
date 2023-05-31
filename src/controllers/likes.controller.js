const httpStatus = require('http-status');

const catchAsync = require('../utils/catchAsync');
const { likeService } = require('../services');

const createLike = catchAsync(async (req, res) => {
  const like = await likeService.createLike(req.body);
  res.status(httpStatus.CREATED).send(like);
});

const getLike = catchAsync(async (req, res) => {
  const likes = await likeService.getLikeByUserId(req.params.userId);
  res.send(likes);
});

const updateLike = catchAsync(async (req, res) => {
  const like = await likeService.updateLikeById(req.params.id, req.body);

  res.send(like);
});

const deleteLike = catchAsync(async (req, res) => {
  await likeService.deleteById(req.params.id);

  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createLike,
  getLike,
  updateLike,
  deleteLike,
};
