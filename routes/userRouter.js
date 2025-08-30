const {Router} = require("express");
const userRouter = Router();
const userController = require("../controllers/userController");

userRouter.get("/", userController.homepage);

module.exports = userRouter;

