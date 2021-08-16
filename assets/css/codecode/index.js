const express = require('express');
const { dirname } = require('path');
const path = require('path');
const port = 8000;
const app = express();
app.set('view engine ', 'ejs');
app.set('views' , path.join(__dirname,'views'));
var contactList = [
    {
        name:"Nitin",
        phone:"7897879"
},
{
    name:"Tony stark",
    phone :"678668776" 
},
{
    name:"Coding ninjas",
    phone:"56445764"
},
]
app.get('/',function (req,res){
    return res.render('home',{
        title:"Contact List",
        contact_list: contactList
    });
})
app.listen(port,function(err){
    if(err){
        console.log("error is running my server");
    }
    console.log("tup my server is running on port",port);
});

const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]

app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});


app.get('/', function(req, res){
    return res.render('home',{
        title: "Contact List",
        contact_list: contactList
    });
})
app.post('/create-contact', function(req, res){
    return res.redirect('/practice');
});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})