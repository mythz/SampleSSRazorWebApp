using System.Runtime.Serialization;
using ServiceStack;

namespace SampleSSRazorWebApp.ServiceInterface
{
    [DataContract]
    public class APSession : AuthUserSession 
    {
        [DataMember]
        public default_asp default_asp { get; set; }

        [DataMember]
        public app_user app_user { get; set; }

        [DataMember]
        public Campaign current_campaign { get; set; }

        public bool showSideNav()
        {
            return false;
        }
    }

    public class default_asp
    {
        public string logo()
        {
            return "https://servicestack.net/img/logo.png";
        }
    }

    public class app_user
    {
        public string Timezone { get; set; }
    }

    public class Campaign
    {
        
    }
}