import express from "express";
import crmRoutes from "./src/routes/crmRoutes.js"
import mongoose from "mongoose"
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/CRMdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

crmRoutes(app)

app.use(express.static("public"))

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.listen(PORT, () => {
    console.log(`Your app is running on port ${PORT}`)
})