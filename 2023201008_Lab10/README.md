# Software System Development Assignment-9
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

### Question 1.1: (3 Marks)  
Read the CSV File Provided & drop the last 6 columns. Write back the resultant
dataset in a file named “Q1_1.txt”

### Question 1.2: (4 Marks)  
Drop all the rows whose percentage change is less than -3% using filter & lambda
functions. Write back the resultant dataset in a file named “Q1_2.txt”

### Question 1.3: (4 Marks)  
Calculate average of Open, High, Low using map and lambda function. Write back
the answer in a file named “Q1_3.txt” in the following format:
Q1_3.txt->  
Average of open  
Average of high  
Average of low  

### Question 1.4: (5 Marks)
Given an input character from the terminal (A-Z,a-z), design a feature such that the
<Symbol, LTP> of all the stocks whose symbol starts with the input should be
displayed.
For example if the input is ‘A’, then it should display the mentioned details of
AdaniPorts, AsianPaint, AxisBank, etc.
The search should not be case sensitive, i.e the previous example should give the
same result if the input was given as ‘a’.
If the search yields no result, then the answer should be a blank table. You also
need to handle any invalid inputs in this case.
In this part you need to print the table in the terminal in a tabular form as well as
write back the resultant table in a file named “Q1_4.txt”

### Question 1.5: (4 Marks)
Create a dataset of your own now. The columns will be Salary, Age, Class, Status.
The data should be randomly generated. The range details of the columns are
given as follows:
Salary should be a float between [10,000.00, 50,000.0]
Age should be an integer between [21,55]
Class should be a value from the list [A,B,C,D,E,F]
Status should be a boolean value True/False
This part is independent of the other parts. There should be 10 rows in the table.
Write back the answer in a file named “Q1_5.txt” in the following format:  
Salary,Age,Class,Status  
10001.12,21,B,True  
11000.00,30,A,False  
.  
.  
.  
10 such rows  

### Terminal:
`  
python3 2023201008.py
`  