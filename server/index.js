const express = require("express");
const config = require("config");
const path = require("path");
const { cardTitleVariant1 } = require("./classes/CardTitle/CardTitle");
const {cardN01} = require("./classes/filledCards/cardN01");


useRouter = require("./routes/user.routes");


const app = express();
// app.use(express.json({extended:true}))
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", useRouter);
const server = require("http").createServer(app);

const PORT = config.get("port") || 5000;

async function start() {
  try {
    server.listen(PORT, () => {
      console.log("Server start at ", PORT);
    });
  } catch (err) {
    console.log("Server error: ", err);
  }
}

start();

// console.log(cardN01.cardTitle)