using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ToDoList.Server.Application.Interfaces;
using ToDoList.Server.Domain.Entities;

namespace ToDoList.Server.Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TareaController : ControllerBase
    {
        private readonly ITareaService _tareaService;

        public TareaController(ITareaService tareaService)
        {
            _tareaService = tareaService;
        }

        [HttpGet("sin-completar")]
        public ActionResult<List<Tarea>> GetTareasSinCompletar()
        {
            var response = _tareaService.ObtenerTareasSinCompletar();
            var result = response.FindAll(task => !task.Completada);
            return Ok(result);
        }

        [HttpGet("completadas")]
        public ActionResult<List<Tarea>> GetTareasCompletadas()
        {
            var response = _tareaService.ObtenerTareasCompletadas();
            var result = response.FindAll(task => task.Completada);
            return Ok(result);
        }

        [HttpPost]
        public IActionResult Create(Tarea tarea)
        {
            _tareaService.AgregarTarea(tarea);

            return CreatedAtAction(nameof(GetTareasSinCompletar), tarea);
        }

       [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Tarea tarea)
        {
            if (id != tarea.Id)
            {
                return BadRequest("El ID no coincide.");
            }

            _tareaService.ActualizarTarea(tarea);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _tareaService.EliminarTarea(id);
            return NoContent();
        }
    }
}
