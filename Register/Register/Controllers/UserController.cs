using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Register.Models;
using System;
using System.Linq;

namespace Register.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [EnableCors("AllowOrigin")]
  public class UserController : ControllerBase
  {

    private readonly IConfiguration _config;

    public readonly UserContext _context;
    public UserController(IConfiguration config, UserContext context)
    {
      _config = config;
      _context = context;
    }

    [HttpPost("CreateUser")]

    public IActionResult Create(User user)
    {
      if (_context.Users.Where(u => u.Email == user.Email).FirstOrDefault() != null) {

        return Ok("Already Exist");
      }

      user.MemberSince = DateTime.Now;
      _context.Users.Add(user);
      _context.SaveChanges();
      return Ok("Success");
    }

    [HttpPost("LoginUser")]
    public IActionResult Login(Login user)
    {
      var userAvailable = _context.Users.Where(U => U.Email == user.Email && U.Pwd == user.Pwd).FirstOrDefault();
      if (userAvailable != null) {
        return Ok("Success");
      }
      return Ok("Failure");

      
    }
  }
}

/*
 * https://localhost:5001/
 * */
