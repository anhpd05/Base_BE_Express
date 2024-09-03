const userRouter = require("./user.route");
module.exports = (app) => {
  const Version = "/api/v1";

  app.use(`${Version}/user`, userRouter);
};
