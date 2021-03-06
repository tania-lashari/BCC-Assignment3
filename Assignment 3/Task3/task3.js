var color = [];
color[0] = prompt("select color");
console.log(color);
var endcolor = prompt("select color");
color.push(endcolor);
console.log(color);
color.unshift("green", "yellow");
console.log(color);
color.shift();
console.log(color);
color.pop();
console.log(color);


