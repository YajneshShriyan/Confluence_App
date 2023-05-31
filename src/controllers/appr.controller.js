const httpStatus = require('http-status');

const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { apprService } = require('../services');

const createAppr = catchAsync(async (req, res) => {
  const appr = await apprService.createAppr(req.body);
  res.status(httpStatus.CREATED).send(appr);
});

const getApprs = catchAsync(async (req, res) => {
  const apprs = await apprService.getApprByUserId(req.params.userId);
  res.send(apprs);
});

const getApprById = catchAsync(async (req, res) => {
  const appr = await apprService.getApprById(req.params.id);
  if (!appr) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Appreciation not found!');
  }

  res.send(appr);
});

const updateAppr = catchAsync(async (req, res) => {
  const appr = await apprService.updateApprById(req.params.id, req.body);
  res.send(appr);
});

const deleteAppr = catchAsync(async (req, res) => {
  await apprService.deleteAppr(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createAppr,
  getApprById,
  getApprs,
  updateAppr,
  deleteAppr,
};
