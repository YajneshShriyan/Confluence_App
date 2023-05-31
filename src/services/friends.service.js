const httpStatus = require('http-status');
const { Friend } = require('../models');
const ApiError = require('../utils/ApiError');

const createFriend = async (userBody) => {
  return Friend.create(userBody);
};

const getFriendById = async (id) => {
  return Friend.findByPk(id);
};

const getFriendsByUserId = async (userId) => {
  return Friend.findAll({
    where: {
      user_id: userId,
    },
  });
};

const updateFriendById = async (id, updateBody) => {
  const friend = await getFriendById(id);

  if (!friend) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Friend not found');
  }

  Object.assign(friend, updateBody);
  await friend.save();
  return friend;
};

const deleteFriend = async (id) => {
  const friend = await getFriendById(id);

  if (!friend) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Friend not found!');
  }

  await friend.destroy();

  return friend;
};

module.exports = {
  createFriend,
  getFriendById,
  getFriendsByUserId,
  updateFriendById,
  deleteFriend,
};
