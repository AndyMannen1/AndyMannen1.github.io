﻿using System;
using System.Threading.Tasks.Dataflow;
using System.Collections.Generic;
using System.Text;
using static System.Console;

namespace Kalkulatorer
{
    class SelectionOptions
    {
        private int SelectedIndex;
        private string[] Options;
        private string Prompt;

        public SelectionOptions(string prompt, string[] options)
        {
            Prompt = prompt;
            Options = options;
            SelectedIndex = 0;
        }

        private void DisplayOptions()
        {
            //Console.WriteLine(Prompt);
            //for (int i = 0; i < Options.Length; i++)
            //{
            //    if (i == SelectedIndex)
            //    {
            //        Console.BackgroundColor = ConsoleColor.Gray;
            //        Console.ForegroundColor = ConsoleColor.Black;
            //    }
            //    Console.WriteLine(Options[i]);
            //    Console.ResetColor();
            //}

            Console.WriteLine(Prompt);
            for (int i = 0; i < Options.Length; i++)
            {
                string currentOption = Options[i];
                string prefix;
                if (i == SelectedIndex)
                {
                    prefix = "*";
                    Console.ForegroundColor = ConsoleColor.Black;
                    Console.BackgroundColor = ConsoleColor.White;


                }
                else
                {

                    prefix = " ";
                    Console.ForegroundColor = ConsoleColor.White;
                    Console.BackgroundColor = ConsoleColor.Black;

                }

                Console.WriteLine($"{prefix} << {currentOption} >>");
            }
            Console.ResetColor();
        }
        public int Run()
        {
            ConsoleKey keyPressed; 
            do
            {
                Console.Clear();
                DisplayOptions();

                ConsoleKeyInfo keyInfo = ReadKey(true);
                keyPressed = keyInfo.Key;

                if (keyPressed == ConsoleKey.UpArrow)
                {
                    SelectedIndex--;
                    if (SelectedIndex == -1)
                    {
                        SelectedIndex = Options.Length - 1;
                    }
                }
                else if (keyPressed == ConsoleKey.DownArrow)
                {
                    SelectedIndex++;
                    if (SelectedIndex == Options.Length)
                    {
                        SelectedIndex = 0;
                    }
                }
            } while (keyPressed != ConsoleKey.Enter);
            return SelectedIndex;
        }
    }
}
