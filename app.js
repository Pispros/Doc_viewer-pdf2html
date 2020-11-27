const express  = require('express');
const pdf2html = require('pdf2html');
//const StudentActivitiesLog = require("./models/studentActivitiesLog");
//const Mycss    = require('./style.css');

const app  = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

let style = "<style>*{ font-size:22px; }  a{ color:#33b5e5 !important; } .annotation{ width:70%;margin-left:12%;text-align:left; } p{ text-align:left; } .page{ padding-bottom: 100px;background-color:white;padding-top:25px;width:70%;margin-left:15%;padding-left:30px;padding-right:30px;-webkit-user-select: none;-moz-user-select: none; -ms-user-select: none;user-select: none; } body{ background-color:#737373;color:black; } .page p:nth-child(2){ text-align:center !important;font-size:26px !important;margin-bottom:45px;font-weight:bold; } ul{ background-color:white;padding:25px; }</style>";

app.use('/:doc/:hash/:date_connexion/:id_student/:id_contenu',(req,res,next) =>
{

	if (
		req.params.date_connexion &&
		req.params.id_student &&
		req.params.id_contenu
	) {
		console.log(req.params.date_connexion);
		console.log(req.params.id_student);
		console.log(req.params.id_contenu);
		//StudentActivitiesLog.insert(req.params.date_connexion, req.params.id_student, req.params.id_contenu);
	}
	pdf2html.html("documents/"+req.params.doc, (err, html) => {
	    if (err) 
	    {
	        console.error('Conversion error: ' + err)
	    } else {

	       res.send(style+html);
	    }
	})
})



module.exports = app ;
