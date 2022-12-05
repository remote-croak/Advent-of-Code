using System;
using System.IO;

namespace Day1{

    class Puzzle1{
        static void Main(string[] args){
            string line = "";
            // string fileLoc;

            int highCalElf = 0;
            int mostCal = 0;

            int curElf = 1;
            int totCal = 0;
            int calCounted;
            
            // StreamReader sr = new StreamReader("inputs\\p1D1Test.txt");
            StreamReader sr = new StreamReader("inputs\\p1D1.txt");
            

            while ((line) != null){
                line = sr.ReadLine();

                if (line == "" || line == null){
                    Console.WriteLine(curElf);
                    Console.WriteLine(totCal);

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
    }
}