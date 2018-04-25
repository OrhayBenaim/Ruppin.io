using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data;
using System.Data.SqlClient;
using System.Web.Script.Serialization;

/// <summary>
/// Summary description for WebService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService
{
    string ConnectionStr = @"Data Source=DESKTOP-PR7E7CC\SQLEXPRESS;Initial Catalog=T_Game;Integrated Security=True";
    public WebService()
    {


    }

    [WebMethod]
    public string Login(string email, string pass)
    {
        User usr = SQL_Handler.Login(email, pass);
        string output = new JavaScriptSerializer().Serialize(usr);
        return output;
    }

}
