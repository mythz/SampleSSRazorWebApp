SampleSSRazorWebApp
===================

This sample Razor project was created to help in the troubleshooting efforts for the [StackOverflow question] (http://stackoverflow.com/questions/27369533/servicestack-razor-not-rendering-pages-correctly-after-upgrade-to-4-x).

The issue here is that ServiceStack.Razor 3.9.71 is able to render the default.cshtml (which in this example is the login page) but I'm not able to get it to render in ServiceStack.Razor 4.0.33. It appears the _Layout.cshtml page is not being read.
