const adminAuth = (req, res, next) => {
  const token = "asd";
  const isAdminAuthorized = (token = "asd");
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "asd";
  const isAdminAuthorized = (token = "asd");
  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
};
