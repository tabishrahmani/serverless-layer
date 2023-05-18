"use strict";
const axios = require("axios");
const { responseHandler } = require("../libs/responseHandler");
const { AppError, errorHandler } = require("../libs/errorHandler");

async function getJoke(event) {
  try {
    const respone = await axios({
      method: "GET",
      url: "https://v2.jokeapi.dev/joke/Any",
    }).then(({ data }) => {
      return data;
    });
    return responseHandler({ respone });
  } catch (error) {
    console.log(error);
    return errorHandler(error);
  }
}

module.exports = {
  handler: getJoke,
};
