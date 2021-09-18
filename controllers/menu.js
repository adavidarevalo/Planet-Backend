const information = require('../information/menu')


exports.allMenu = async(req, res)=>{
    res.json([...information.information])
  }
  
  