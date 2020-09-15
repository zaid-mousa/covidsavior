var express = require(express);
var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(express.urlencoded({ extended: false }));

app.get("/", function(req, res){
  request('https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats', function(error, response, body){
    if(!error && response.statusCode == 200){
      var parstedData = JSON.parse(body);
      //console.log(parstedData);
      var data = {};
      //console.log(parstedData);
      data['deaths'] = parstedData['data']['death_closed_cases'];
      //console.log(parstedData['data']['death_closed_cases']);
      //console.log(data);
      res.render('index', {data: data});
    }
  });
});

app.get("/about", async function(req, res){
  res.render('About');
});

app.get("/demo", function(req, res){
  res.render('demo');
});

app.get('/login', function(req, res){
  res.render('login');
});

app.get('/register', function(req, res){
  res.render('register');
});


app.listen(3000);
