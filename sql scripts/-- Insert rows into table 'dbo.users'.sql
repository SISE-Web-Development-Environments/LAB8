-- Insert rows into table 'dbo.users'
INSERT INTO dbo.users
( -- columns to insert data into
 [username], [password]
)
VALUES
( -- first row: values for the columns in the list above
 'aa', HASHBYTES('SHA2_256', 'aaa')
)
-- add more rows here
GO