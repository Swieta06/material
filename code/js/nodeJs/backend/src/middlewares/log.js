const log = (req, res, next) => {
  console.log(`[${req.method}] ${req.baseUrl}${req.path}`);
  next();
};

module.exports = log;
