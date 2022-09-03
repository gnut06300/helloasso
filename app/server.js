const express = require('express');
const app = express();
const cookieSession = require("cookie-session");

app.use(express.json());
const cors = require('cors');

require('dotenv').config();



app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cookieSession({
        name: "epitech-session",
        secret: "COOKIE_SECRET", 
       //utiliser une variable d'environnement
        httpOnly: true
    })
);
// dossier static public
app.use(express.static("public"));


app.listen(process.env.PORT || 3001, () => {
    console.log(`🚀Server running, port : ${process.env.PORT || 3001}🚀
    🌕Host : ${process.env.HOST || "localhost"}🌕`);
} 
);