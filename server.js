const express = require("express");
let  app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.listen(PORT,  () => console.log("Favorite app listening on port 3000!"));

app.get('/',(req, res)=>{
    res.send({working:true});
});