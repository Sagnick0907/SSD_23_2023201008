# Software System Development Assignment-8
### | Author : Sagnick Bhar | Roll No. : 2023201008 |  

## QUESTION 1 :  
Database Schema:
User:
Username : string
Password : string  
ToDo:
Title: string
Description: string
DueDate:Date
Status:Boolean (0 for complete, 1 for not complete)  

### Login Page(10 Marks):
Create To-do Page(15 Marks):
1. This Page is to create a To-Do item. (7 marks)
i. Input box containing title.
ii. Input box containing description
iii. Date Picker for To-Do item completion.
Iv. Create button: Create new to-do item.
2. Date can’t be previous date i.e. only future dates are allowed to create a
To-Do item. (3 marks)
3. Click on create button to insert ToDo details entered by user in database (5
marks)
### Complete To-do Page(10 Marks):
1. This page should display To-Do details whose status is completed for a
logged in user (5 marks)
2. All details should be read-Only (5 marks)
### Pending To-Do Page (20 Marks):
1. This page displays ToDo items whose status is in-complete. (5 marks)
2. All details should be readonly. (2 marks)
3. Every ToDo displayed should have 2 buttons : Done , Delete. (3 marks)
4. Done Button should change ToDo item status to complete. (5 marks)
5. The Delete button should delete the ToDo item from Database. (5 marks)
### Logout: (5 marks)
1. Logout from the site, redirect to the login page.  

### Solution:
1. import necessary modules.
2. In server/:   
`
npm start server
`  
In client/:   
`
sudo npm install react-router-dom  
npm start
`  


Note: Only the Update status and delete is not implemented. Rest of it is completed.