import * as fs from 'fs';

var power:number = 0;
var gamma:number[] = new Array();
var epsilon:number[] = new Array();
var report_line:string[] = new Array();
var count_zero:number = 0;
var count_one:number = 0;
var i:number = 0;
var j:number;


const report = fs.readFileSync('../data/diagnostic.txt', 'utf8');
//const report = fs.readFileSync('../data/diagnostic_test.txt', 'utf8');

report_line = report.split('\r\n');

for(i; i < report_line[0].length; i++){
  for(j = 0; j < report_line.length-1; j++){

    if (report_line[j][i] == '1'){
      count_one++;
    }

    else{
      count_zero++;
    }
  }

  if(count_one >= count_zero){
    gamma.push(1);
    epsilon.push(0);
  }

  else{
    gamma.push(0);
    epsilon.push(1);
  }

  count_one = 0;
  count_zero = 0;
}

console.log("gamma: ", gamma.join('') + " decimal value: ", parseInt(gamma.join(''), 2));
console.log("epsilon: ", epsilon.join('') + " decimal value: ", parseInt(epsilon.join(''),2));

//power is calculated by finding gamma and the inverse of gamma called epsilon
power = parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''),2);
console.log("power consumption: ", power);
