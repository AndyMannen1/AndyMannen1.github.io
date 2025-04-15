using System;
using System.Threading.Tasks.Dataflow;
using System.Collections.Generic;
using System.Text;
using static System.Console;
using Kalkulatorer;

namespace Calculator
{
    public class SelectionClass()
    {
        public void RunSelect()
        {
            Title = "Calculator 2:";
            RunMenu();

        }

        private void RunMenu()
        {
            string prompt = "Select a calculator:";
            string[] options = { "Basic Calculator", "Super Basic Electromagnetism Calculator", "Exit" };
            SelectionOptions MenuOptions = new SelectionOptions(prompt, options);
            int SelectedIndex = MenuOptions.Run();

            switch (SelectedIndex)
            {
                case 0:
                    BasicCalculator();
                    break;
                case 1:
                    SuperBasicElectromagnetismCalculator();
                    break;
                case 2:
                    Exit();
                    break;
            }
        }


        private void BasicCalculator() {
            WriteLine("Basic Calculator selected");
        }

        private void SuperBasicElectromagnetismCalculator()
        {
            Console.Clear();
            WriteLine("Super Basic Electromagnetism Calculator selected");
            ElectroCalc electroCalc = new ElectroCalc();

  

        }

        private void Exit()
        {
            WriteLine("Exiting...");
            Environment.Exit(0);
        }

    }
}