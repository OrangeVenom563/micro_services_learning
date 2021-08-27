const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Basics testing</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">click</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  res.write("<html>");
  res.write("<head><title>Basics testing</title></head>");
  res.write(
    "<body><h1>Hello it works we see this content from node http server</h1></body>"
  );
  res.write("</html>");
  res.end();
});
server.listen(3000);
