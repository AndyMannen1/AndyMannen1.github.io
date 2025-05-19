namespace SlotMachineSharp.Server
{
    public class Gamble
    {
        private static readonly Random getrandom = new Random();

        public static int GetRandomNumber(int min, int max)
        {
            
            lock (getrandom)
            {
                return getrandom.Next(min, max);

            }

        }


        public class GambleRoll
        {


            public static int[] Rolling()
            {
                int[] result = new int[3];
                int i;
                for (i = 0; i < result.Length; i++)
                {
                    result[i] = GetRandomNumber(1, 11);
                }
                return result;

            }


                }
                
        }



}
