let express = require("express");
let mongoose = require("mongoose");
let viewRouter = require("./Router/viewRouter");
let cors = require("cors");

mongoose.connect(
  "mongodb+srv://shivank:123@cluster0.lwmac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    autoIndex: true,
  },
  () => {
    console.log(mongoose.connection.readyState);
    console.log("result");
  }
);

let app = express();
app.use(cors());
app.use("/", viewRouter);
app.listen(8000, () => {
  console.log("server is runnig at port 3000");
});
