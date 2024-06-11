import userApiService from "../services/userApiService";

const readFunc = async (req, res) => {
  try {
    if (req.query.page && req.query.limit) {
      let page = req.query.page;
      let limit = req.query.limit;

      let data = await userApiService.getUserWithPagination(+page, +limit);
      return res.status(200).json({
        EM: data.EM, //err message
        EC: data.EC, //err code
        DT: data.DT, //data
      });
    } else {
      let data = await userApiService.getAllUser();
      return res.status(200).json({
        EM: data.EM, //err message
        EC: data.EC, //err code
        DT: data.DT, //data
      });
    }
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({
      EM: "error from server", //err message
      EC: "-1", //err code
      DT: "", //data
    });
  }
};

const createFunc = (req, res) => {
  try {
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({
      EM: "error from server", //err message
      EC: "-1", //err code
      DT: "", //data
    });
  }
};

const updateFunc = (req, res) => {
  try {
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({
      EM: "error from server", //err message
      EC: "-1", //err code
      DT: "", //data
    });
  }
};

const deleteFunc = (req, res) => {
  try {
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
  deleteFunc,
};
