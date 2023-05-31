const httpStatus = require('http-status');

const catchAsync = require('../utils/catchAsync');
const { friendService } = require('../services');

const createFriend = catchAsync(async (req, res) => {
  const friend = await friendService.createFriend(req.body);
  res.status(httpStatus.CREATED).send(friend);
});

const getFriend = catchAsync(async (req, res) => {
  const friends = await friendService.getFriendsByUserId(req.params.userId);
  res.send(friends);
});

const updateFriend = catchAsync(async (req, res) => {
  const friend = await friendService.updateFriendById(req.params.id);

  res.send(friend);
});

const deleteFriend = catchAsync(async (req, res) => {
  await friendService.deleteFriend(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createFriend,
  getFriend,
  updateFriend,
  deleteFriend,
};
