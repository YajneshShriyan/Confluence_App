const httpStatus = require('http-status');

const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { pageService } = require('../services');

const createPage = catchAsync(async (req, res) => {
  const page = await pageService.createPage(req.body);
  res.status(httpStatus.CREATED).send(page);
});

const getPagesByUserId = catchAsync(async (req, res) => {
  const pages = await pageService.getPageByUserId(req.params.userId);

  res.send(pages);
});

const getPageById = catchAsync(async (req, res) => {
  const page = await pageService.getPageById(req.params.id);

  if (!page) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Page not found!');
  }

  res.send(page);
});

const updatePageById = catchAsync(async (req, res) => {
  const page = await pageService.updatePageById(req.params.id, req.body);

  res.send(page);
});

const deletePage = catchAsync(async (req, res) => {
  await pageService.deletePageById(req.params.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createPage,
  getPageById,
  getPagesByUserId,
  updatePageById,
  deletePage,
};
