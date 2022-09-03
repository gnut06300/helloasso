const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 5001;
const host = process.env.HOST || 'localhost';

// const cookieSession = require("cookie-session");

app.use(express.json());
const cors = require('cors');




app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//     cookieSession({
//         client_id: process.env.CLIENT_ID,
//         client_secret: process.env.CLIENT_SECRET, 
//         grant_type: process.env.GRANT_TYPE,
//        //utiliser une variable d'environnement
//         httpOnly: true
//     })
// );
// dossier static public
app.use(express.static("public"));

// const AssocRouter = require('./routes/Association');
// const AuthRouter = require('./routes/Auth');
// Routes
// app.use("/api", AssocRouter);
// app.use("/api", AuthRouter);
app.get('/', function (req, res) {
    res.send('Hello World !');
});


app.listen(port, () => {
    console.log(`🚀Server running, port : ${port}🚀,🌕Host : ${host}🌕`);
});