const express = require('express');
const cors = require('cors');
const app = express()

cors({
    origin: '*',
});

app.use(cors());
app.options('*', cors());

app.get('/', (req, res) => {
    //res.json('YOU\'VE TEST NODE API SERVER');
    return res.send('Received GET HTTP method');
});
    
app.listen(5000, () => {
    console.log('Test Node API server started on localhost:' + 5000);
});
