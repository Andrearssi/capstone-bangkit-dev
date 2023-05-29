/* eslint-disable linebreak-style */
export const successResponse = (res, data = null, message = 'success', statusCode = 200) => res.status(statusCode).json({
  success: true,
  message,
  data,
});

export const errorResponse = (res, message = 'something went wrong', statusCode = 500) => res.status(statusCode).json({
  success: false,
  message,
});
