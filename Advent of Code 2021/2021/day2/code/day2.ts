import * as fs from 'fs';

var h_pos:number = 0;
var depth:number = 0;
var sub_pos:number = 0;
var sub_com:string[] = new Array();
var i:number;
var command:string[] = new Array();

//var file = fs.readFileSync('../data/inputDay2_test.txt', 'utf8');
var file = fs.readFileSync('../data/inputDay2.txt', 'utf8');

sub_com = file.split('\r\n');
sub_com.pop();
for(i = 0; i < sub_com.length; i++){
  command = sub_com[i].split(' ');
  if(command[0] == 'forward'){
    console.log('forward by: ', command[1]);
    h_pos += parseInt(command[1]);
  }

  else if (command[0] == 'up'){
    console.log('up by: ', command[1]);
    depth -= parseInt(command[1]);
  }

  else{
    console.log('down by: ', command[1]);
    depth += parseInt(command[1]);
  }
}

console.log('sub: ', sub_com)

console.log('final_h: ', h_pos);
console.log('final_depth: ', depth);

sub_pos = h_pos * depth;
console.log('boop: ', sub_pos);
