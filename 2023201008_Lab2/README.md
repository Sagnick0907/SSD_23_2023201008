# SSD LAB-2
### | Author : Sagnick Bhar | Roll No. : 2023201008 |  

## QUESTION 1 :  
Write a bash script to print complex pyramid structures, where ‘n’ is the number of rows in each pyramid. No pyramid should be printed if ‘n’ is even.  
### Terminal Input:  
`
$  ./2023201008_q1.sh
`
` 
$ number of test cases
`
` 
$ all n values
`
### Solution:  
1. Take user input n  
2. Take the rest n user input as a string and then space separate it and store in array.  
3. Run a for loop.  
4. Check if it is even or not.  
5. Print the diamond pattern using 2 for loops.  
6. The patterns from 2nd onwards are shifted towards right.  

## QUESTION 2 :
Write a bash script that takes a directory path as input and prints list of all
files/directories in the long format that satisfy the following conditions:
1. User has all permissions (read,write,execute)
2. Group does not have read and execute permissions
3. Other has at least execute permission  
### Terminal Input:  
`
$  ./2023201008_q2.sh	dirpath
`

### Solution:  
1. Take input the directory path from argument.  
2. Use ls -l cmd and pipe the list of text to grep cmd here I will filter to get the correct fields with permissions.    

## QUESTION 3 :  
You know the path to the directory which contains all the “cpp” files. You have to create a shell script to display all the libraries (that is, all the lines containing the phrase “#include”) on your terminal.
### Terminal Input:  
`
$  ./2023201008_q3.sh	dirpath
`

### Solution:
1. Take input the directory path from argument.  
2. Use grep cmd  to filter to get all the list of libraries used.    
