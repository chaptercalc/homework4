


var m = [

{
	name: 'bill',
	species: 'ape',
	foodsEaten: ['bark', ' bananna'],
	eatSomething: function (food){
		console.log("I am going to eat a " +food);
	},
	intro: function (){
		console.log(m[0])
	}
},

{
	name: 'al',
	species: 'red ape',
	foodsEaten: ['peach', ' leaves'],
	eatSomething: function (food){
		console.log("Al is going to eat a " +food);
	},
	intro: function (){
		console.log(m[1])
	}
},

{
	name: 'lauren',
	species: 'blue ape',
	foodsEaten: ['ants', ' nuts'],
	eatSomething: function (food){
		console.log("I am going to eat a " +food);
	},
	intro: function (){
		console.log(m[2])
	}
}

];

function printAllApes(){
	for (var i=0; i<m.length; i++){
		console.log(m[i].name + ':: ' + m[i].species + ':: ' + m[i].foodsEaten + ':: ') 
		}

};

function specificApe(name){
	for (var i=0; i<m.length; i++) {
      if (m[i].name === name) {
        m[i].intro();
      }
    }
  };

printAllApes();
specificApe('al');


var shoes = [
  {brand: 'nike', price: 4.59, size: 7},
  {brand: 'adidas', price: 9.99, size: 12}
];

var user = {
  size: 12,
  budget: 20,
  findShoes: function() {
    for (var i=0; i<shoes.length; i++) {
      if (shoes[i].size === 12 && shoes[i].price <= 20) {
        console.log('Im going to buy the ' + shoes[i].brand);
      }
    }
  }
};

user.findShoes();