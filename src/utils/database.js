import mongoose from "mongoose";


(async () => {
    try{
    const db = await  mongoose.connect("mongodb://localhost/Prueba")
    console.log("DB Connected to", db.connection.name)
   } catch(error){
    console.error(error);
   }

})();