const express = require("express")
const app = express()
const path = require("path")
const pathName = path.join(__dirname,"..","public")


app.use(express.static(pathName))
app.engine("html",require("ejs").renderFile)
app.set("view engine","ejs")



app.get("*",function(req,res){
    res.render(pathName+"/index.html")
})


app.listen("8080",() => {
    console.log("server initiated")
})