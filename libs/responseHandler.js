"use strict";

module.exports.responseHandler = (data, statusCode) => {
  return {
    statusCode: statusCode ? statusCode : 200,
    body: JSON.stringify({ ...data, success: true }, null, 2),
  };
};
