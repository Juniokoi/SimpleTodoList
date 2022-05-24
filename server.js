import express from "express";
import path from 'path';
import bodyParser from 'body-parser';
import todayDate from "./public/components/dateGenerator.js";
const __dirname = path.resolve( path.dirname( '' ) );

let items = [];
const workItems = [];
const app = express();
const PORT = 3333;

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( "public" ) );
app.set( 'view engine', 'ejs' );



// Main directory path
app.get( '/', ( req, res ) => {
  res.render( "list", { listTitle: todayDate, items: items } );
} );

app.post( '/', ( req, res ) => {
  let item = req.body.newItem;

  items.push( item );

  res.redirect( '/' );
} );

// Work directory path
app.get( '/work', ( req, res ) => {
  res.render( "list", { listTitle: "Work List", items: workItems } );
} );

app.post( "/work", function ( req, res ) {
  let item = req.body.newItem;
  workItems.push( item );
  res.redirect( "/work" );
} );

app.listen( PORT, () => {
  console.log( `Server is running on PORT: ${PORT}` );
} );