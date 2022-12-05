import * as fs from 'fs';

var scrubber:string[] = new Array(); // C02
var generator:string[] = new Array(); // Oxygen
var power:number = 0;
var i:number = 0;
var num_bits:number;

const report = fs.readFileSync('../data/diagnostic.txt', 'utf8');
//const report = fs.readFileSync('../data/diagnostic_test.txt', 'utf8');


scrubber = report.split('\r\n');
scrubber.pop();
generator = report.split('\r\n');
generator.pop();


num_bits = scrubber[0].length;

for(i; i < num_bits; i++){

  if((scrubber.length == 1) && (generator.length == 1)){
    i = num_bits;
  }
  else{
    if (scrubber.length != 1){
    scrubber = get_rating(scrubber, 'least', i);
    console.log('scrub: ', scrubber);
    }

    if(generator.length != 1){
    generator = get_rating(generator, 'most', i);
    console.log('gener: ', generator);
    }
  }
}

console.log('C02 scrub: ', scrubber.join('') + ' decimal value: ', parseInt(scrubber.join(''),2));
console.log('Oxygen generator: ', generator.join('') + ' decimal value: ', parseInt(generator.join(''), 2));
console.log('power consumption: ', parseInt(scrubber.join(''),2) * parseInt(generator.join(''), 2));

//Determine if the rating is oxygen or C02
//parameters: report: either oxygen or C02 of values,
//            common: either most or least common values searching for
//            bit: the current bit being compared.
function get_rating(report:string[], common:string, bit:number ){
  var count_one:number = 0;
  var count_zero:number = 0;
  var one:string[] = new Array();
  var zero:string[] = new Array();

  for (var r = 0; r < report.length; r++){
    if (report[r][bit] == '1'){
      count_one++
      one.push(report[r]);
    }

    else{
      count_zero++;
      zero.push(report[r]);
    }
  }
  console.log('count_one: ', count_one + ' count_zero: ', count_zero);
  if (count_one > count_zero){
    // most common is 1 or even
    if (common == 'most'){
      // return array one to generator

      return one;
    }
    else{
      // least common is 0 then return array zero to scrubber

      return zero;
    }
  }

    // if count is even then follow edge case result
  else if (count_one == count_zero){

      // if most then generator gets one array
      if (common == 'most'){
        return one;
      }
      // if least then scrubber gets zero array
      else{
        return zero;
      }
    }

    // if most common is 0
  else{
    // generator gets zero array
    if (common == 'most'){
      return zero;
    }
    // least is 1 and scrubber gets one array
    else{
      return one;
    }
  }
}
