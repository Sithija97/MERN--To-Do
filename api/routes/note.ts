import express from "express";

const noteRouter = express.Router();

noteRouter.route("/");
//   .get(getAllUsers)
//   .post(createNewUser)
//   .patch(updateUser)
//   .delete(deleteUser);

export { noteRouter };
