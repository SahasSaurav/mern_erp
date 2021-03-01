const notFound = (req, res, next) => {
  // creating 404 error
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  // sending the error to the error handler middleware
  next(error);
};

// error handler middleware
const errorHandler = (err, req, res, next) => {
  // sometimes some error has status code of 200
  // if error has status code of 200 then replace with 500 ie server error status code
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  // send the error response to the client
  res.json({
    success: false,
    status: statusCode,
    message: err.message,
    stackTrace: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};


export{
  notFound,
  errorHandler
}