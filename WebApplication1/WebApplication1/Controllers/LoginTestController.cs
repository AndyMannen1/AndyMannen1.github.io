using Microsoft.AspNetCore.Mvc;
using WebApplication1;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginTestController : ControllerBase
    {


        private readonly ILogger<LoginTestController> _logger;

        public LoginTestController(ILogger<LoginTestController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult Post([FromBody] LoginClass data)
        {

             if (data.Username == "admin" && data.Password == "Skole123")
            {
                return Ok(new { Message = "Login successful" });
            }
            else
            {
                return Unauthorized("Invalid login credentials.");
            }

        }
        /*
        [HttpGet(Name = "/LoginTest")]

        public string[] Logins()
        {

            Console.WriteLine("Hello World!");
            LoginClass testLogin = new LoginClass();
            Console.WriteLine(testLogin.Username);
            return new string[] { "value1", "value2" };
        }
        */
    }
    
}