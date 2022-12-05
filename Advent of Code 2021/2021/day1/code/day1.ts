import * as fs from 'fs';

var count:number = 0;
var i:number;
var depthVal:string[];


//var data = fs.readFileSync('../data/day1Test.txt', 'utf8');

var data = fs.readFileSync('../data/inputDay1.txt', 'utf8');
depthVal = data.split('\r\n');

for(i = 0; i < depthVal.length; i++){
  if (parseInt(depthVal[i]) < parseInt(depthVal[i+1]))
  {
    count++;
  }
}

console.log("boop: ", count);
