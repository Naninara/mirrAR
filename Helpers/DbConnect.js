const mongoose = require("mongoose");
function DbConnect() {
  mongoose
    .connect(
      "mongodb+srv://nmvmanikanta:MavinNara1234@cluster0.mktinqb.mongodb.net/mirrAR?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = DbConnect;
