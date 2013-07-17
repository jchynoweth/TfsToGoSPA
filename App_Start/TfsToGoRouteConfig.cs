using System.Web.Mvc;

[assembly: WebActivator.PreApplicationStartMethod(
    typeof(TfsToGo.App_Start.TfsToGoRouteConfig), "RegisterTfsTogoPreStart", Order = 2)]

namespace TfsToGo.App_Start {
  ///<summary>
  /// Inserts the HotTowel SPA sample view controller to the front of all MVC routes
  /// so that the HotTowel SPA sample becomes the default page.
  ///</summary>
  ///<remarks>
  /// This class is discovered and run during startup
  /// http://blogs.msdn.com/b/davidebb/archive/2010/10/11/light-up-your-nupacks-with-startup-code-and-webactivator.aspx
  ///</remarks>
  public static class TfsToGoRouteConfig {

    public static void RegisterTfsTogoPreStart() {

      // Preempt standard default MVC page routing to go to HotTowel Sample
      System.Web.Routing.RouteTable.Routes.MapRoute(
          name: "TfsToGo",
          url: "{controller}/{action}/{id}",
          defaults: new
          {
              controller = "TfsToGo",
              action = "Index",
              id = UrlParameter.Optional
          }
      );
    }
  }
}