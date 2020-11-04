module.exports = {
    getPlanes: (req, res) => {
      const db = req.app.get("db");
  
      db.get_planes()
        .then(planes => {
          res.status(200).send(planes);
        })
        .catch(err => {
          console.log(err);
          res.status(404).send("Get outta my swap");
        });
    },
    addPlane: (req, res)=>{
        const db = req.app.get('db');
        const{type, count} = req.body
        db.add_plane([type, count])
        .then(planes => {
            res.status(200).send(planes)
        }).catch(err => {
            console.log(err);
            res.status(500).send('Could not add plane')
        })
    }
  };