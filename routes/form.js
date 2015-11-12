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
		background:'',
		subheader:'',
		pf:'',
		description: '',
		adresse:'',
		email:'',
		pn:''
	};
	renderData.errors=villumelding(req.body);
	if(renderData.errors.length!==0)
		renderData=putIn(renderData,req.body);
		if(renderData.background === ''){
			renderData.background = 'http://i.imgur.com/ZXDrw5D.gif'
		}
  	res.render('sida', renderData);
});

function putIn(renderData, data){
	renderData.name=data.name;
	renderData.background=data.background;
	renderData.subheader=data.subheader;
	renderData.pf=data.pf;
	renderData.description=data.description;
	renderData.adresse=data.adresse;
	renderData.email=data.email;
	renderData.pn=data.pn;
	return renderData;
}

function villumelding(data){
	var errors=[];
	if(!validate.length(data.name,3))
		errors.push('You must enter your name');
	if(!validate.isEmail(data.email))
		errors.push('The email is not valid');
	if(!validate.required(data.val))
		errors.push('You must select how you live');
	return errors;
}

module.exports = router;
