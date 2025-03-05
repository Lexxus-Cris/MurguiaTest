using ToDoList.Server.Application.Interfaces;
using ToDoList.Server.Application.Services;
using ToDoList.Server.Infrastructure.Repositories;

namespace ToDoList.Server.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddSingleton<ITareaRepository, TareaRepository>();
            services.AddScoped<ITareaService, TareaService>();

            return services;
        }
    }
}
