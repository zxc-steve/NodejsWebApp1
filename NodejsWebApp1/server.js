const express = require('express')
const app = express()
const port = 1337
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello, My Server!')
})
app.get('/data', (req, res) => {
    assignment2(req,res,)
})
app.post('/trackName', (req, res) => {
    assignment4(req, res,)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

function assignment2(req, res) {
    let p = req.query?.number; console.log(p)
    let n = parseInt(p);
    if (!p) res.send("Lack of Parameter")
    else if (!Number.isInteger(n) ||n<0) res.send(" Wrong Parameter");
    else {
        let sum = 0;
        for (i = 1; i <= n; i++) sum += i;
        res.send(sum.toString());
    }
}
function assignment4(req, res) {
    console.log(req.body)
    res.redirect('/myName.html')
}