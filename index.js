const express = require('express')
const app = express()

const prod = [
    {name: 'ford', price: 5, count: 20, id: 1},
    {name: 'merc', price: 3, count: 15, id: 2},
    {name: 'bmw', price: 8, count: 17, id: 3},
    {name: 'audi', price: 9, count: 22, id: 4},
    {name: 'opel', price: 12, count: 25, id: 5},
    {name: 'nissan', price: 20, count: 4, id: 6},
    {name: 'toyota', price: 9, count: 8, id: 7},
    {name: 'akura', price: 19, count: 28, id: 8},
    {name: 'lexus', price: 28, count: 12, id: 9},
    {name: 'honda', price: 10, count: 10, id: 10}
]

app.get('/product/:id', (req, res) => {
    res.send(JSON.stringify(prod.find((user) => user.id == req.params.id)))
})

app.get('/product', function (req, res) {
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    res.send(JSON.stringify(prod.slice(count, offset + count)));
  });
  
app.listen(3000, () => {
    console.log('listening on')
})