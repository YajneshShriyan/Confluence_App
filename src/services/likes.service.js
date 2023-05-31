const httpStatus = require('http-status');
const { Like } = require('../models');
const ApiError = require('../utils/ApiError');

const createLike = async (likeBody) => {
  return Like.create(likeBody);
};

const getLikeById = async (id) => {
  return Like.findByPk(id);
};

const getLikeByUserId = async (userId) => {
  return Like.findAll({
    user_id: userId,
  });
};

const updateLikeById = async (id, likeBody) => {
  const like = await getLikeById(id);

  if (!like) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Like not found');
  }

  Object.assign(like, likeBody);
  await like.save();
  return like;
};

const deleteById = async (id) => {
  const like = await getLikeById(id);

  if (!like) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Like not found!');
  }
  await like.destroy();
  return like;
};

module.exports = {
  createLike,
  getLikeById,
  getLikeByUserId,
  updateLikeById,
  deleteById,
};
