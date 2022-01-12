export const notFound = (request, response, next) => {
  const error = new Error(`Not Found - ${request.originalUrl}`);
  response.status(400);
  next(error);
};

export const errorHandler = (error, request, response, next) => {
  const errorCode = response.statusCode === 200 ? 500 : response.statusCode;
  response.status(errorCode);
  response.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};
