const express = require('express');
const cors = require('cors');
const wifi = require('node-wifi-scanner');
const app = express();

// APP SETUP
app.use(express.json());

// CORS SETUP
cors({
    origin: '*',
});
app.use(cors());
app.options('*', cors());

// WIFI SETUP
// wifi.init({ iface: null });

app.get('/', (req, res) => {
    return res.send('NEURHOME Hub is here.');
});

app.get('/wifi', (req, res) => {
    wifi.scan((err, networks) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } 
        else {
            console.log(networks);
            // network = network.map(e => e.ssid)
            //                  .map((e, i, final) => final.indexOf(e) === i && i)
            //                  .filter(e => network[e])
            //                  .map(e => network[e]);
            networks.sort((a, b) => b.rssi - a.rssi);
            return res.send(networks);
        }
    })
});

app.post('/setup', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});
    
app.listen(5000, () => {
    console.log('Test Node API server started on localhost:' + 5000);
});
