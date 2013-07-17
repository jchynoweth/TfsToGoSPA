using System;
using System.Web.Optimization;

[assembly: WebActivator.PostApplicationStartMethod(
    typeof(TfsToGo.App_Start.TfsToGoConfig), "PreStart")]

namespace TfsToGo.App_Start
{
    public static class TfsToGoConfig
    {
        public static void PreStart()
        {
            // Add your start logic here
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}