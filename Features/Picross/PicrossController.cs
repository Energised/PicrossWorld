using Microsoft.AspNetCore.Mvc;

namespace PicrossWorld.Features.Picross;

public class PicrossController : Controller 
{
    private readonly ILogger<PicrossController> _logger;

    public PicrossController(ILogger<PicrossController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
}