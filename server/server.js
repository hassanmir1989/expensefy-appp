const express = require("express")
const app = express()
const path = require("path")
const pathName = path.join(__dirname,"..","public")
const port = process.env.PORT || 3000

app.use(express.static(pathName))
app.engine("html",require("ejs").renderFile)
app.set("view engine","ejs")



app.get("*",function(req,res){
    res.render(pathName+"/index.html")
})


app.listen(port,() => {
    console.log("server initiated")
})