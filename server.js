const express = require('express');
const app = express();

app.use( express.static( 'WebContent' ) );

app.listen( 80, () => console.log( "Server Up!" ) );