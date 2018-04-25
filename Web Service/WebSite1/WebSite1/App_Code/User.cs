using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Class1
/// </summary>
public class User
{
    public string Name { get; set; }
    public int ID { get; set; }
    public int Score { get; set; }
    public User(string name, int id, int score)
    {
        Name = name;
        ID = id;
        Score = score;
    }
}