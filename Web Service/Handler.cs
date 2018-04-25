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
    static string ConnectionStr = @"Data Source=.;Initial Catalog=T_Game;Integrated Security=True";
    public WebService()
    {


    }

    [WebMethod]
    public string UserExist(string email, string pass)
    {
        string data = SQLSelectUser(email, pass);

        return data;
    }



    private string SQLSelectUser(string email, string pass)
    {
        SqlConnection con = null;
        SqlDataReader reader = null;
        try
        {
            con = new SqlConnection(ConnectionStr);
            SqlCommand cmd = new SqlCommand($"SELECT * from Users Where Email = '{email}' and User_Password = {pass}", con);
            con.Open();

            reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                string res = reader["User_Name"].ToString();
                return "{'User_Name': '" + res + "'}";
            }
            return "{User_Name: ''}";
        }
        catch (Exception e)
        {
            return e.Message;
        }
        finally
        {
            if (con != null && con.State == ConnectionState.Open)
            {
                con.Close();
            }
            if (reader != null)
            {
                reader.Close();
            }
        }


    }

}
