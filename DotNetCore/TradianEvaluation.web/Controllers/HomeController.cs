using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TradianEvaluation.web.Models;

namespace TradianEvaluation.web.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult Support()
    {
        return View();
    }


    [HttpGet]
    public IActionResult GetDeclarationForm()
    {
        return PartialView("partials/_heroDeclarationStatus");
    }
    
    [HttpGet]
    public IActionResult GetContainerForm()
    {
        return PartialView("partials/_heroContainerTracking");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}