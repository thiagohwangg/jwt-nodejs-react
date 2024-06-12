import groupService from "../services/groupService"

const readFunc = async (req, res) => {
  try {
    let data = await groupService.getGroups();
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
};
