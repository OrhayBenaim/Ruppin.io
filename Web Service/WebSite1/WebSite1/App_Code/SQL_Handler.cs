using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

/// <summary>
/// Summary description for Class1
/// </summary>
public static class SQL_Handler
{
    static string ConnectionStr = @"Data Source=DESKTOP-PR7E7CC\SQLEXPRESS;Initial Catalog=T_Game;Integrated Security=True";
    static SqlConnection con = new SqlConnection(ConnectionStr);
    static SqlCommand cmd = new SqlCommand("",con);
    static SqlDataReader reader;

    static public User Login(string email, string pass)
    {
        con.Open();
        cmd.CommandText = $" SELECT dbo.Users.User_Id, dbo.Users.User_Name, dbo.High_Score.High_Score " +
                $" FROM dbo.High_Score INNER JOIN dbo.Users ON dbo.High_Score.User_Id = dbo.Users.User_Id " +
                $" WHERE(dbo.Users.User_Password = '{pass}') AND(dbo.Users.Email = '{email}')";
        reader = cmd.ExecuteReader();

        if (reader.Read())
        {
            User usr = new User(reader["User_Name"].ToString(), int.Parse(reader["User_Id"].ToString()), int.Parse(reader["High_Score"].ToString()));
            con.Close();
            reader.Close();
            return usr;
        }
        con.Close();
        reader.Close();
        return null;
    }

}