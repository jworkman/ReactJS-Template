const { LoginToken } = require('../models/index')

const isAuthenticated = async (req, res, next) => {

  if (typeof req.headers.token !== "undefined") {
    const token = await LoginToken.findOne({
      where: {token: req.headers.token}
    })
    if (token) {
      next()
      return
    }
  }

  if (typeof req.session.access_token !== "undefined") {
    next()
    return
  }
  
  res.send('You shall not pass!')
}
module.exports = isAuthenticated
