import loginRegisterService from "../services/loginRegisterService"

const handleRegister = async(req, res) => {
    try {
        if(!req.body.email || !req.body.phone || !req.body.password) {
            return res.status(200).json({
                EM: 'Missing required parameters', //err message
                EC: '1', //err code
                DT: '', //data
            })    
        }

        if(req.body.password && req.body.password.length < 4) {
            return res.status(200).json({
                EM: 'Your password must have more than 3 letters', //err message
                EC: '1', //err code
                DT: '', //data
            })  
        }

        // service: create user
        let data = await loginRegisterService.registerNewUser(req.body)

        return res.status(200).json({
            EM: data.EM, //err message
            EC: data.EC, //err code
            DT: '', //data
        })

    } catch (error) {
        return res.status(500).json({
            EM: 'error from server', //err message
            EC: '-1', //err code
            DT: '', //data
        })
    }
    
}

const handleLogin = async(req, res) => {
    try {
      let data = await loginRegisterService.handleUserLogin(req.body)
    // set cookie
    res.cookie("jwt", data.DT.access_token, {httpOnly: true, maxAge: 60 * 60 * 1000})

        return res.status(200).json({
            EM: data.EM, //err message
            EC: data.EC, //err code
            DT: data.DT, //data
        })
    } catch (error) {
        console.log("error: ", error);
        return res.status(500).json({
            EM: 'error from server', //err message
            EC: '-1', //err code
            DT: '', //data
        })
    }

    
}

module.exports = {
    handleRegister,
    handleLogin
}