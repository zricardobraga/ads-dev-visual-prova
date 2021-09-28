using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace API.Controllers
{
    [Route("Musica")]
    [ApiController]
    public class MusicaController : ControllerBase
    {
        private readonly DataContext _context;

        public MusicaController(DataContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Create")]
        public IActionResult Create([FromBody] Musica musica)
        {
            try
            {
                _context.Musica.Add(musica);
                _context.SaveChanges();
                return Created("Música adicionada com sucesso!", musica);
            }
            catch(Exception ex)
            {
                throw;
            }
        }

        [Route("List")]
        public IActionResult List() => Ok(_context.Musica.ToList());
    }
}
