import db from "../models/"

const createNewRoles = async(roles) => {
    try {
        let currentRoles = await db.Role.findAll({
            attributes: ["url", "description"],
            raw: true
        })

        const persists = roles.filter(({ url: url1 }) => !currentRoles.some(({ url: url2 }) => url2 === url1));
        if(persists.length === 0) {
            return {
                EM: "Nothing to create ...",
                EC: 0,
                DT: [],
              };
        } 
        await db.Role.bulkCreate(persists);
        return {
            EM: `Create roles succeeds: ${persists.length} roles...`,
            EC: 0,
            DT: [],
          };
    } catch (error) {
        console.log("error: ", error);
        return {
            EM: "something wrongs with services",
            EC: 1,
            DT: [],
          };
    }
}

module.exports = {
    createNewRoles
}