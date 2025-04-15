using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kalkulatorer
{
    internal class ElectroCalc
    {
  
        public void Calc()
        {

            Console.WriteLine("Hello World!");

            double lightSpeed = 3e8;
            double waveLength;

            Console.WriteLine("Input frequency, without \"hz\". For example 6e14.");
            string freqInput = Console.ReadLine();

            double frequency = Convert.ToDouble(freqInput);


            waveLength = lightSpeed / frequency;

            Console.WriteLine("The frequency of the EM wave with specified wavelength(" + frequency + ") is: " + waveLength + "m");


        }
 
    }
}



