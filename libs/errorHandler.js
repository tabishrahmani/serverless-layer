class AppError extends Error {
  constructor(msg = "Invalid Body!", errorCode = 500, errors = []) {
    super(msg);
    this.errorCode = errorCode;
    this.errors = errors;
  }
}

exports.AppError = AppError;

function errorHandler(error) {
  let errorCode = error.errorCode || 500;
  let msg = error.message || null;
  let errors = error.errors || [];

  return {
    statusCode: errorCode,
    body: JSON.stringify({ success: false, msg, errors }, null, 2),
  };
}

exports.errorHandler = errorHandler;
