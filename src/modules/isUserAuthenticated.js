const isUserAuthenticated = function isUserAuthenticated(req,res,next){
  if(req.user) {
    next()
  } else {
    res.json({
      error: 'Private route.'
    })
  }
}

module.exports = isUserAuthenticated