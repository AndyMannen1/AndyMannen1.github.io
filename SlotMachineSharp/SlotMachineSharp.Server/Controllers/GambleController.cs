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
        public IEnumerable<Gamble> Get()
        {
            Random rnd = new Random();
            return Enumerable.Range(1, 3).Select(index => new Gamble
            {

                Id = rnd.Next(1, 11)
            })
            .ToArray();

        }

    }
}
