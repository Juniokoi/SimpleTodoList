import express from "express";
import path from 'path';
import bodyParser from 'body-parser';
import todayDate from "./components/dateGenerator.js";

let items = [];

const app = express();
app.use( bodyParser.urlencoded( { extended: true } ) );
// const __dirname = path.resolve(path.dirname(''))

const PORT = 3333;
app.set( 'view engine', 'ejs' );




app.get( '/', ( req, res ) => {
  res.render( "list", { day: todayDate, items: items } );
} );

app.post( '/', ( req, res ) => {
  let item = req.body.newItem;

  items.push( item );

  res.redirect( '/' );
} );

app.listen( PORT, () => {
  console.log( `Server is running on PORT: ${PORT}` );
} );