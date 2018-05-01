using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

/// <summary>
/// Summary description for Class1
/// </summary>
public class SQL_Handler
{
    static string ConnectionStr = @"Data Source=DESKTOP-7DK9IUH\SQLEXPRESS;Initial Catalog=T_Game;Integrated Security=True";

    DataSet ds = new DataSet();
    SqlDataAdapter adtr = null;

    private static SQL_Handler instance;

    public static SQL_Handler Instance {
        get
        {
            if (instance == null)
                instance = new SQL_Handler();

            return instance;
        }
    }
    private SQL_Handler() { }


    public User Login(string email, string pass)
    {
        SqlConnection con = new SqlConnection(ConnectionStr);
        adtr = new SqlDataAdapter($" SELECT dbo.Users.User_Id, dbo.Users.User_Name, dbo.High_Score.High_Score " +
                $" FROM dbo.High_Score INNER JOIN dbo.Users ON dbo.High_Score.User_Id = dbo.Users.User_Id " +
                $" WHERE(dbo.Users.User_Password = @pass) AND(dbo.Users.Email = @email)", con);
        adtr.SelectCommand.Parameters.Add(new SqlParameter("pass" , pass));
        adtr.SelectCommand.Parameters.Add(new SqlParameter("email", email));
        ds.Clear();
        adtr.Fill(ds, "Users");

        DataTable TB_Users = ds.Tables["Users"];

        if (TB_Users.Rows.Count > 0)
        {
           
            User usr = new User(TB_Users.Rows[0]["User_Name"].ToString(), int.Parse(TB_Users.Rows[0]["User_Id"].ToString()), int.Parse(TB_Users.Rows[0]["High_Score"].ToString()));

            return usr;
        }
        return null;
    }

}