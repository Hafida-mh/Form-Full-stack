const mysql = require('mysql');


const postForm = (req, res) => {
// Connexion to ata Base


const Nom = req.body.Nom
  const Prenom = req.body.Prenom;
  const Telephone = req.body.Telephone;
  const Birth = req.body.Birth;
  const Email = req.body.Email;
  const Soins = req.body.Soins;

  let values = [Nom, Prenom, Telephone, Email, Birth, Soins];

const connection = mysql.createConnection({
          host: "localhost",
          user: "cp1754047p45_centreesthetique",
          password : "smartpixel@22",
          database: "cp1754047p45_centrelaseresthetique",
         
  });

  connection.connect(function (err) {
    if (err) throw err;
    console.log("Database livreur Connected!");
  });



let stmt = "INSERT INTO `promotion`( Nom, Prenom, Telephone, Email, Soins, Birth) VALUES (?,?,?,?,?,?)";


// execute the insert statment
connection.query(stmt, values, (err, results, fields) => {
  if (err) {
    return console.error(err.message);
  }
  // get inserted id
//console.log(results)

else{
return  res.status(200).json({
    messageError: "",
    messageSuccess: "Inscription réussite",
  });
}
});
}





module.exports = {
    postForm
}