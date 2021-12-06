const path = require('path')
const express = require('express')
//const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const https = require('https')
const cors = require('cors');
const bodyParser = require('body-parser');
const getAPI = require("./mockAPI.js")

dotenv.config();

const API_KEY = process.env.API_KEY;
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)




// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Evaluator listening on port 8081!')
})


app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
});

app.post("/", function (req, res) {
  
  res.send(  '{"Hello":"ITISME"}');
  return '';
});



app.get('/getInfo', function (req, res) {
 res.send("This's getInfo");
 return "";
});


app.post('/getInfo', async function (req, res) {

    let url = req.body?.url || "";

    console.log(`Attempting to Evaluate URL: ${url || "URL not available"}`);

    let ret = {};

   	  try {  
	  ret = await getAPI(url);
 		} catch (err) {
			res.send({error:true}); return {error: true};
			}

	ret = typeof(ret) === "object" ? ret : JSON.parse(ret);   	    
 	res.send(ret);
	return ret;   
});

