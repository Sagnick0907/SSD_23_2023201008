# Software System Development Lab-7
### | Author : Sagnick Bhar | Roll No. : 2023201008 |  

## QUESTION 1 :  
Database Schema:
User:
Username : string
Password : string
Login Page(10 Marks):
1. This is the landing page of your application which has the following:
(2 marks)
i. Input field to capture Username of the user.
ii. Input field to capture the Password of the user.
iii. Two buttons – Login and Sign Up, to log in the user to application and
register the new user, respectively.
2. The login must be session-based authentication and use MongoDB to persist
session data. (5 marks)
3. If a user navigates to other pages without login, he/she must be redirected
to the login page. (3 marks)
Register Page (10 Marks):
1. This page is for registration of new users. (2 marks)
i. Input Field to capture Username of the user.
ii. Input Field to capture the Password of the user.
iii. Input Field to capture the confirmed Password.
2. Registration should be only for new users i.e. if the username doesn’t exist
otherwise show a message that username already exists. ( 6 marks)
Note: Registration Details should get saved into Database. No need to store
confirm password, it's just to check if the password entered matches or not.
3. After Registration users should get redirected to Login Page.
(2 marks)
(Point 3 of Login Page is also applicable here)
Create To-do Page (5 Marks):
1. This Page is to create a To-Do item. (2 marks)
i. Input box containing title.
ii. Input box containing description
iii. Date Picker for To-Do item completion.
Iv. Create button: Create new to-do item.
2. Date can’t be previous date i.e. only future dates are allowed to create a
To-Do item. (2 marks)
3. When clicked on the create button all entered details should get displayed in
the alert box. (1 marks)

### Solution:
1. import necessary modules.
2. In server/:   
`
sudo npm install  
npm start server
`  
In client/:   
`
sudo npm install react-router-dom  
npm start
`  


