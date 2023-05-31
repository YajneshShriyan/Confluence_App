const httpStatus = require('http-status');
const { Appreciate } = require('../models');
const ApiError = require('../utils/ApiError');

const createAppr = async (apprBody) => {
  return Appreciate.create(apprBody);
};

const getApprById = async (id) => {
  return Appreciate.findByPk(id);
};

const getApprByUserId = async (userId) => {
  return Appreciate.findAll({
    user_id: userId,
  });
};

const updateApprById = async (id, apprBody) => {
  const appr = await getApprById(id);

  if (!appr) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Appr not found!');
  }

  Object.assign(appr, apprBody);
  await appr.save();
  return appr;
};

const deleteAppr = async (id) => {
  const appr = await getApprById(id);

  if (!appr) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Appreciate not found! ');
  }

  await appr.destroy();

  return appr;
};

module.exports = {
  createAppr,
  getApprById,
  getApprByUserId,
  updateApprById,
  deleteAppr,
};
