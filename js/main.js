function Fortune(obj) {
	this.api = obj.api || 'https://api.icndb.com/jokes/random';
	this.fortune = null;

	this.init();
}


Fortune.prototype.init = function() {
  	if (!this.fortune) {
    	return this.getWord()
    	.then(data => { 
    	  this.initTwo();
    	})
    	.catch(function(err) {
    	  console.log(err);
    	});
  	}
};

Fortune.prototype.getWord = function() {
  var self = this;

  return new Promise(function(resolve, reject) {
    fetch('https://api.icndb.com/jokes/random')
    .then(function(res) {
      return res.json();
    })
    .then((data) => {
      self.fortune = data.value.joke;
      resolve(); 
    })
    .catch(function(err) {
    	  console.log(err);
   	})    
  });
};

Fortune.prototype.initTwo = function() {
	this.buttonAdd();
};

Fortune.prototype.buttonAdd = function() {
	var form = document.getElementById('theform');
	var butt = document.createElement('button');
	butt.innerText = 'New Joke';
	butt.addEventListener('click', e => {
		e.preventDefault();
		this.getWord();
		this.addItems();
	});
	form.appendChild(butt);
};

Fortune.prototype.addItems = function(){
	var textNode = document.createTextNode(this.fortune);
	var li = document.createElement('li');
	var list = document.getElementById('list');
	li.appendChild(textNode);
	list.appendChild(li);
	console.log(this.fortune);
};

var newF = new Fortune({});



// document.addEventListener('DOMContentLoaded', function() {

// }, false);



// Fortune.prototype.registerClickHandlers = function() {
//   var self    = this;
//   var newFort = document.getElementById('btn');
  
//   newFort.forEach(function(l) {
//     l.addEventListener('click', self.fortune.bind(self));
//   });
// }
