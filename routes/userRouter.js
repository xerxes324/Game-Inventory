const {Router} = require("express");
const userRouter = Router();
const userController = require("../controllers/userController");

userRouter.get("/", userController.homepage);
userRouter.get("/searchGame", userController.searchGame);
userRouter.get("/tableList", userController.viewTable);
userRouter.get("/games",userController.showGames);
userRouter.get("/developers", userController.showDevelopers);
userRouter.get("/genres", userController.showGenres);

module.exports = userRouter;

