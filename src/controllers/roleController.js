import userApiService from "../services/userApiService";
import roleApiService from "../services/roleApiService";

const readFunc = async (req, res) => {
  try {
      let data = await roleApiService.getAllRoles();
      return res.status(200).json({
        EM: data.EM, //err message
        EC: data.EC, //err code
        DT: data.DT, //data
      });
    
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({
      EM: "error from server", //err message
      EC: "-1", //err code
      DT: "", //data
    });
  }
};

const createFunc = async(req, res) => {
  try {
    let data = await roleApiService.createNewRoles(req.body);
      return res.status(200).json({
        EM: data.EM, //err message
        EC: data.EC, //err code
        DT: data.DT, //data
      });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({
      EM: "error from server", //err message
      EC: "-1", //err code
      DT: "", //data
    });
  }
};

const updateFunc = async(req, res) => {
  try {
    let data = await userApiService.updateUser(req.body);
      return res.status(200).json({
        EM: data.EM, //err message
        EC: data.EC, //err code
        DT: data.DT, //data
      });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({
      EM: "error from server", //err message
      EC: "-1", //err code
      DT: "", //data
    });
  }
};

const deleteFunc = async(req, res) => {
  try {
  let data = await roleApiService.deleteRole(req.body.id)
  return res.status(200).json({
    EM: data.EM, //err message
    EC: data.EC, //err code
    DT: data.DT, //data
  });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({
      EM: "error from server", //err message
      EC: "-1", //err code
      DT: "", //data
    });
  }
};



module.exports = {
  readFunc,
  createFunc,
  updateFunc,
  deleteFunc
};
