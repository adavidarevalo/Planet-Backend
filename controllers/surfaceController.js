const Planet = require("../information/surface")

exports.surfaceData = async(req, res)=>{
  const container = Planet.Planet.filter(item => item.name === req.params.name)
  res.json({...container[0]})
}

