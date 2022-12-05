import * as fs from 'fs';
let winner:boolean = false;
let val:number = 0;
// var call:string[] = new Array();
// var boards:obj[] = new Array();
//
// // create board object that is added to an array
// // var board = {
// //   marked: [],
// //   unmarked: [],
// //   rows:[]
// // };
//
// // Alternative method is by implementing an interface called IBoard
// // which does the same thing.
//
// interface IBoard {
//   marked:string[]
//   unmarked:string[]
//   rows:string[]
// }
//
// function addBoard():IBoard{
//   var rows =
// }
//
// var createboard = function(obj:{rows:string[], unmarked:string[]}){
//   obj.rows[]
// }

while (!winner){
  val++;
  console.log('value: ', val + ' winner: ', winner);
  if (val == 3){
    //console.log('value: ', val + ' winner: ', winner);
    winner = true;
    console.log('value: ', val + ' winner: ', winner);
  }
}
