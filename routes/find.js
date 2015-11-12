'use strict';

var express = require('express');
var router = express.Router();
var users = require('../lib/sites');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('examle', { title: 'Express' });
});

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
				console.log('bla')
				console.log('1 '+renderData.background)
		if(renderData.background === ''){
				console.log('2 '+renderData.background)
			renderData.background = 'http://i.imgur.com/ZXDrw5D.gif'
				console.log('3 '+renderData.background)
		}
  	res.render('sida', renderData);
});
module.exports = router;
