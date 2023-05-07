const http=require('http');

const server=http.createServer(function(req,res){
const url=req.url

if(url==='/home'){
    res.write('<html>')
    res.write('<body><h3>Welcome Home</h3></body>')

    res.write('</html>')
    return res.end()
}
if(url==='/about'){
    res.write('<html>')
    res.write('<body><h3>Welcome about page</h3></body>')

    res.write('</html>')
    return res.end()
}
if(url==='/node'){
    res.write('<html>')
    res.write('<body><h3>Welcome to my node project</h3></body>')

    res.write('</html>')
    return res.end()
}



});

server.listen(4000);