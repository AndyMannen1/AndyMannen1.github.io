using Microsoft.AspNetCore.Mvc;

namespace SlotMachineSharp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GambleController : ControllerBase
    {


        private readonly ILogger<GambleController> _logger;

        public GambleController(ILogger<GambleController> logger)
        {
            _logger = logger;
        }
        

        [HttpGet(Name = "GetGamble")]
        
        public int[] gamgling()
        {
            
/*            return Enumerable.Range(1, 3).Select(index => new Gamble
            {
                public int id = Gamble.res1;
            })
            
            .ToArray();
            */

            Gamble testgamble = new Gamble();
            return Gamble.GambleRoll.Rolling();
        }
    }
    
}
