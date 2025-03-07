﻿namespace ToDoList.Server.Domain.Entities
{
    public class Tarea
    {
        public int Id { get; set; }
        public required string Descripcion { get; set; }
        public DateTime FechaCreacion { get; set; }
        public DateTime? FechaVencimiento { get; set; }
        public bool Completada { get; set; }
        public bool Destacada { get; set; }
    }
}
