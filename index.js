const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);
    res.write("<html>");
    res.write("<head><title>Basics testing</title></head>");
    res.write("<body><h1>Hello it works we see this content from node http server</h1></body>");
    res.write("</html>");
    res.end()
})
server.listen(3000);