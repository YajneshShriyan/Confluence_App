const httpStatus = require('http-status');
const { Page } = require('../models');
const ApiError = require('../utils/ApiError');

const createPage = async (userBody) => {
  return Page.create(userBody);
};

const getPageById = async (id) => {
  return Page.findByPk(id); // id is the primary key
};

const getPageByUserId = async (userId) => {
  return Page.findAll({
    where: {
      user_id: userId,
    },
  });
};

const updatePageById = async (id, updateBody) => {
  const page = await getPageById(id);

  if (!page) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Page not found!');
  }

  Object.assign(page, updateBody);
  await page.save();
  return page;
};

const deletePageById = async (id) => {
  const page = await getPageById(id);

  if (!page) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Page not found!');
  }

  await page.destroy();

  return page;
};

module.exports = {
  createPage,
  getPageById,
  getPageByUserId,
  updatePageById,
  deletePageById,
};
