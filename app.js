const express = require("express");
const userRouter = require("./routes/userRouter");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));

const PORT = process.env.port || 3000;

app.use("/", userRouter);

app.listen(PORT, ()=>{
    console.log(`Starting server on port ${PORT}`);
})