const express = require('express')
const server = express();
const path = require('path');
let ejs = require('ejs');
const port = 3000;

server.set('view engine', 'ejs');

// Link to css file 
server.use(express.static(path.join(__dirname, 'public')));



server.get('/', (req, res) => {
    res.render(__dirname + '/views/pages/index');
});

server.use((req, res, next) => {
    res.status(404).render(__dirname + '/views/pages/notfound')
})


server.listen(port, () => {
    console.log(`Server currently listen on http://localhost:${port}`)
})

