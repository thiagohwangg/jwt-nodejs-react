const testApi = (req, res) => {
    return res.status(200).json({
        message: 'OK',
        data: 'test api'
    })
}

const handleRegister = async(req, res) => {
    console.log("req: ", req.body);
    
}

module.exports = {
    testApi,
    handleRegister
}