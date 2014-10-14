using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VisitorsCountApplication.Models
{
    public class Ajax
    {
        // Returns number of online users.
        public int GetOnlineUsersCount()
        {
            Random rnd = new Random();
            int userCount = rnd.Next(10000, 10500);
            return userCount;
        }
    }
}