import * as fs from 'fs';

var count:number = 0;
var i:number;
var depthVal:string[] = new Array();
var depthValSlide:number[] = new Array();
var slide:number = 0;
var addSlide;

//var data = fs.readFileSync('../data/day1Test.txt', 'utf8');

var data = fs.readFileSync('../data/inputDay1.txt', 'utf8');

depthVal = data.split('\r\n');

for(i = 0; i < depthVal.length - 3; i++){
  slide = parseInt(depthVal[i]) + parseInt(depthVal[i+1]) + parseInt(depthVal[i+2]);
  depthValSlide.push(slide);

}

for(i = 0; i < depthValSlide.length; i++){
  if(depthValSlide[i] < depthValSlide[i+1]){
    count++;
  }
}

console.log("list of slides: ", depthValSlide);
console.log("number of slides: ", depthValSlide.length);

console.log("boop: ", count);
