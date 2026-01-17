
const express = require('express');

const app = express();
const server = http.createServer(app);
app.use((req,res,next)=>{
console.log(req.url,req.method);
next();
});
app.use((req,res,next)=>{
console.log(req.url,req.method);
});


const port = 8790;
server.listen(port,()=>{
  console.log(`Server is listening on port http://localhost:${port}`);
});