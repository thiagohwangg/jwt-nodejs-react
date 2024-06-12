import db from "../models/";

const getGroups = async () => {
  try {
    let data = await db.Group.findAll({
        order : [['name', 'ASC']]
    });
    if (data) {
      return {
        EM: "Get groups success", //err message
        EC: 0, //err code
        DT: data, //data
      };
    }
  } catch (error) {
    console.log("error: ", error);
    return {
      EM: "error form service",
      EC: 1,
      DT: [],
    };
  }
};

module.exports = {
  getGroups,
};
