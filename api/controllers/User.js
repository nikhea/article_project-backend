let db = require('../models')




exports.Singup = (req, res, next) => {
    const {name,email, username, password, confirmPassword } = req.body
    try {
        
        const newuser = new db.User({
            name,
            email,
            username,
            password,
            confirmPassword

        })
  
    } catch (error) {
        
    }
}
exports.LogIn = (req, res, next) => {
      try {
          
      } catch (error) {
          
      }
}