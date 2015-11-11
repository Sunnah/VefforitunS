'use strict';

var express = require('express');
var router = express.Router();
var validate=require('../lib/validate');
/* GET /form */
router.get('/', function(req, res) {
  res.render('form', { errors:[] });
});

/* POST /form */
router.post('/', function(req, res) {
	var renderData={
		name:'',
		pf:'',
		subheader:'',
		adresse:'',
		val:'',
		subheader:'',
		description: '',
		hobbie1:'',
		hobbieD1:'',
		hobbieP1:'',
		hobbie2:'',
		hobbieD2:'',
		hobbieP2:'',
	};
	renderData.errors=villumelding(req.body);
	if(renderData.errors.length!==0)
		renderData=putIn(renderData,req.body);
  	res.render('sida', renderData);
});

function putIn(renderData, data){
	renderData.name=data.name;
	renderData.pf=data.pf;
	renderData.subheader=data.subheader;
	renderData.description=data.description;
	renderData.hobbie1=data.hobbie1;
	renderData.hobbieD1=data.hobbieD1;
	renderData.hobbieP1=data.hobbieD1;
	renderData.hobbie2=data.hobbie2;
	renderData.hobbieD2=data.hobbieD2;
	renderData.hobbieP2=data.hobbieP2;
	renderData.adresse=data.adresse;
	renderData.pn=data.pn;
	renderData.subheader=data.subheader;
	return renderData;
}

function villumelding(data){
	var errors=[];
	if(!validate.length(data.name,3))
		errors.push('You must enter your name');
	if(!validate.isEmail(data.email))
		errors.push('The email is not valid');
	if(!validate.address(data.adresse))
		errors.push('The adress is not valid');
	if(!validate.required(data.val))
		errors.push('You must select how you live');
	if(!validate.phonenumber(data.pn))
		errors.push('The phone number is not valid');
	return errors;
}

module.exports = router;
