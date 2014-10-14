using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace VisitorsCountApplication.Controllers
{
    public class OnlineUsersCountApiController : ApiController
    {
      
        // GET api/UsingAjax
        public int GetOnlineUserCount()
        {
            var onlineUsersCountModelObj = new Models.Ajax();
            return onlineUsersCountModelObj.GetOnlineUsersCount();
        }

    }
}