import userService from "../services/userService"
const handleHelloWorld = (req, res) => {
  return res.render("home.ejs");
};

const handleUserPage = async(req, res) => {
 let userList = await userService.getUserList();

  return res.render("user.ejs", {userList});
};

const handleCreateNewUser = (req, res) => {
  let { email, password, username } = req.body;

  userService.createNewUser(email, password, username)

  return res.redirect("/user");
};

const handleDeleteUse = async(req, res) => {
  console.log("req: ", req.params.id);
  await userService.deleteUser(req.params.id)
  return res.redirect("/user");
  
}

const getUpdateUserPage = async(req, res) => {
  let id = req.params.id
  let user = await userService.getUserById(id)
  let userData = {};

  userData = user;
  // if(user && user.length > 0) {
  //   userData = user[0]
  // }
  return res.render("user-update.ejs", {userData})
}

const handleUpdateUser = async(req, res) => {
  let {email, username, id} = req.body;
  await userService.updateUserInfo(email, username, id);
  return res.redirect("/user");
}

module.exports = {
  handleHelloWorld,
  handleUserPage,
  handleCreateNewUser,
  handleDeleteUse,
  getUpdateUserPage,
  handleUpdateUser
};
