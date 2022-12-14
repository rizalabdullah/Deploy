require(`dotenv`).config();
require(`./database/mongoose`);

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 5000;

const productRouter = require("./app/product/routes");
const authRoute = require('./app/auth/router');

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "uploads")));

app.use(`/api`, productRouter);
app.use(`/auth`, authRoute);

// app.use(`/`, (req, res) => {
//     res.send(`hello word`);
// });

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend-reactjs/build'));
 app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'frontend-reactjs', 'build', 'index.html'));
  });   
}

app.listen(port, () => console.log(`listening on port ${port}`));
