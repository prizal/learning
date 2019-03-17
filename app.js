

const http = require("http")

const server = http.createServer(function(request,response)
{
    response.end("hello world")

})

server.listen(3000,function()){

    console.log("server is running")
})