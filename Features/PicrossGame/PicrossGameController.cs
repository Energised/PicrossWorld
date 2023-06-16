using Microsoft.AspNetCore.Mvc;
using PicrossWorld.Models.Picross;

namespace PicrossWorld.Features.PicrossGame;

using PicrossGenerator;

public class PicrossGameController : Controller 
{
    private readonly ILogger<PicrossGameController> _logger;
    private readonly PicrossGenerator _generator;

    public PicrossGameController(ILogger<PicrossGameController> logger, [FromServices] PicrossGenerator generator)
    {
        _logger = logger;
        _generator = generator;
    }

    public async Task<IActionResult> Index()
    {
        var game = await _generator.Generate(10, 10);
        return View(game);
    }

    [HttpPost]
    public JsonResult Save(Board board)
    {
        return Json("Success");
    }
}