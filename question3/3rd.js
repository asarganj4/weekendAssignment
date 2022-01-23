var array = [5,2,10,11, 5, 8, 2, 9];

var element = 8; 
var flag = 0;  

for(var i=0; i<array.length; i++) {
	if(element == array[i])
		flag = 1;
}

if(flag == 1)
	console.log('Element Found');
else
	console.log('Element Not Found')