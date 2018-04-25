-- noinspection LossyEncodingForFile


/*
Use Master
GO
Drop Database T_Game
GO
*/
     
CREATE DATABASE T_Game
GO

Use T_Game
GO

-- ����� ���� ������
EXEC sp_addtype 'Us_Code', 'int', 'not null'
EXEC sp_addtype 'Us_Id', 'char (10)', 'not null'
EXEC sp_addtype 'Us_Names', 'varchar (16)', 'not null'
GO

-- ����� ������
create TABLE [Users] (
	[User_Id] int identity(1,1) primary key,
	[User_Name] [Us_Names] ,
	[User_Password] [US_Names],
	[Email] nvarchar(30)	  
)
GO

create TABLE [High_Score] (
	[User_Id] int identity(1,1) FOREIGN KEY 
          (User_Id) REFERENCES [dbo].[Users] (User_Id) ,
	[User_Name] [Us_Names] ,
	[High_Score] [Us_Code] Null	
) 
GO


-- ����� ������ ������
--ALTER TABLE [dbo].[Users]
--ADD
--CONSTRAINT [PK_Users] PRIMARY KEY (User_Id)
--GO



-- ����� ������ ���� - ���� ������ �������
--ALTER TABLE [dbo].[High_Score]
--ADD
--CONSTRAINT [Fk_High_Score] FOREIGN KEY 
--          (User_Id) REFERENCES [dbo].[Users] (User_Id)
--go



-- �������� ������ ������� ����� �������
-- �������� ������ ����� ���
create proc P_Insert_User 
@Name [Us_Names],
@Pass [Us_Names],
@Email nvarchar(30)
as
BEGIN
   Insert [dbo].[Users]
    (
	[User_Name],
	[User_Password],
	[Email]
	) 
	Values (
	@Name,
	@Pass,
	@Email
	)
	end
	begin
	Insert [dbo].[High_Score]
	(
[User_Name],
[High_Score]
	)
	values(
	@Name,
	0
	)
END
go

create proc P_Check_Availability
@Name [Us_Names],
@Pass [Us_Names],
@Email nvarchar(30)
as
IF EXISTS
(select * from [dbo].[Users] where [Email] = @Email)
begin
print 'Email Already Exists'
return(1)
end
else
begin
exec P_Insert_User @Name,@Pass,@Email
return(0)
end
go

exec P_Check_Availability 'Alon' , '1234' , 'email1'
go

exec P_Check_Availability 'Yakir' , '123' , 'email2'
go

exec P_Check_Availability 'orchay' , '123' , 'email1'
go

select * from Users

