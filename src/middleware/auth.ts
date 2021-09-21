/**
 * Middle to check if a user session exists or not in the coming request.
 * @param req {Object}
 * @param res {Object}
 * @param next {Function}
 */
const userSessionAuthenticationMiddleware = (req, res, next) => {
  if (req.session.token) {
    next();
  } else {
    res.status(401).send({
      message: 'You are not authorized to access protected routes.',
    });
  }
};

export default userSessionAuthenticationMiddleware;
