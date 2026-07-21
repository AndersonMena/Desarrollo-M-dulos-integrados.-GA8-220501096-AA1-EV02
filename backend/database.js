const mongoose = require('mongoose'); 
 const URI = 'mongodb+srv://atonmena1402_db_user:atonmena1402@cluster0.arf3ab8.mongodb.net/?appName=Cluster0'; 
 mongoose.connect(URI)
     .then(db => console.log('DB is connected'))
     .catch(err => console.error(err));  
 module.exports = mongoose;