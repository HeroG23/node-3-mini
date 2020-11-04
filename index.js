require('dotenv').config();
const express = require("express");
const massive = require('massive');
const ctrl = require('./controller');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING, 
  ssl:{
      rejectUnauthorized: false
  }
}).then(db => {
    app.set('db', db);
  //   db.new_planes()
  //   .then( planes => console.log( planes ) )
  //   .catch( err => console.log( err ) );

  // db.get_planes()
  //   .then(planes => console.log(planes))
  //   .catch(err => console.log(err));
  console.log("Ya done good son!!")
}).catch(err => console.log(err));

app.get("/api/planes", ctrl.getPlanes);
app.post("/api/planes", ctrl.addPlane);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
