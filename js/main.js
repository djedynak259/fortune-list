function Fortune(obj) {
	this.api = obj.api || 'http://fortunecookieapi.com/v1/fortunes';
	this.fortune = null;

	this.init();
}


Fortune.prototype.init = function() {
	var self = this;

  	if (!this.fortune) {
    	return this.getWord()
    	.then(function(data) { 
    	  self.initTwo();
    	})
    	.catch(function(err) {
    	  console.log(err);
    	});
  	}
}

Fortune.prototype.getWord = function() {
  var self = this;

  return new Promise(function(resolve, reject) {
    fetch('http://fortunecookieapi.com/v1/fortunes')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      self.fortune = data[Math.floor(Math.random() * 100) +1].message;
      resolve(); 
    });    
  })
};

Fortune.prototype.initTwo = function() {
	this.buttonAdd();
	this.addItems();
}

Fortune.prototype.buttonAdd = function() {
	var text = document.createTextNode('Submit2');
	var form = document.getElementById('theform');
	var butt = document.createElement('button');
	butt.setAttribute('onclick','this.addItems()');
	butt.setAttribute('type','button');
	butt.appendChild(text);
	form.appendChild(butt);
}

Fortune.prototype.showFortune = function() {
	console.log(this.fortune);
	return this.fortune;
}

Fortune.prototype.addItems = function(){
	// var userData = document.getElementById('userData').value
	var textNode = document.createTextNode(this.showFortune());
	var li = document.createElement('li');
	var list = document.getElementById('list');
	li.appendChild(textNode);
	list.appendChild(li);
	console.log(this.fortune);
};

var newF = new Fortune({});

// function next() {
// 	return newF;
// }
// console.log(objj);




// document.addEventListener('DOMContentLoaded', function() {

// }, false);



// Fortune.prototype.registerClickHandlers = function() {
//   var self    = this;
//   var newFort = document.getElementById('btn');
  
//   newFort.forEach(function(l) {
//     l.addEventListener('click', self.fortune.bind(self));
//   });
// }
