using System;
using System.IO;

namespace Day1{

    class Puzzle1{
        static void Main(string[] args){
            string line = "";
            // string fileLoc;

            int highCalElf = 0;
            int mostCal = 0;
            int secondMost = 0;
            int thirdMost = 0;

            int curElf = 1;
            int totCal = 0;
            int calCounted;
            
            // StreamReader sr = new StreamReader("inputs\\p1D1Test.txt");
            StreamReader sr = new StreamReader("inputs\\p1D2.txt");
            

            while ((line) != null){
                line = sr.ReadLine();

                if (line == "" || line == null){
                    Console.WriteLine(curElf);
                    Console.WriteLine(totCal);

                    mostCal = CompareCalories(totCal, mostCal);
                    secondMost = CompareCalories(totCal, secondMost);
                    thirdMost = CompareCalories(totalCal, thirdMost);
                    if totCal < mostCal{
                        secondMost = CompareCalories(totCal, secondMost);
                        
                    }
                    
                    if(totCal > mostCal){
                        mostCal = totCal;
                        highCalElf = curElf;
                    }
                    Console.WriteLine(mostCal);
                    totCal = 0;
                    curElf++;
                   
                }
                else {
                    
                    Int32.TryParse(line, out calCounted);
                    totCal += calCounted;
                 
                   
                }

                // Console.WriteLine(totCal);
                //Console.WriteLine(curElf);
               
            }

          Console.WriteLine("Elf with the most Calories: {0} ", highCalElf);
          Console.WriteLine("has this many Calories: {0}", mostCal);
        }

        static int CompareCalories(int val1, int val2){
            if (val1 > val2){
                return val1;
            }
            else return val2;
        }
    }
}