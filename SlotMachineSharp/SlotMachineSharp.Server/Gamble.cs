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
                int[] result = new int[4];
                int i;
                for (i = 0; i < result.Length; i++)
                {
                    result[i] = GetRandomNumber(1, 11);
                }
                if (result[0] == result[1] && result[1] == result[2])
                {
                    result[3] = 1;
                } else
                {
                    result[3] = 0;
                }
                return result;

            }


                }
                
        }



}
