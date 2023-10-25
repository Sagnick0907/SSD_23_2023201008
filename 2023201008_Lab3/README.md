# SSD LAB-3
### | Author : Sagnick Bhar | Roll No. : 2023201008 |  

## QUESTION 1 :  
1. Clean the ‘dish_name’ column by removing leading & trailing spaces. Also
remove ‘0’s in ‘dish_name’ column (if any). Update the same table. Print the
table.
### Solution: Used TRIM and REPLACE TO SOLVE

2. All dishes are either ‘Chicken’ or ‘Paneer’. Create a new column ‘food_type’
which can have values ‘veg’ or ‘non-veg’. Update the same table. Print the
table.
### Solution: ALTER TABLE AND UPDATED TABLE TWICE

3. All prices are in multiples of 100. Subtract one from the price for Veg dishes &
five from the price of non-Veg dishes. Update the same table. Print the table.
Complete this task in just one query.
### Solution: USED CASE TO APPLY THE CONDITIONS IN A SINGLE QUERY

4. Give an average price for ‘veg’ and ‘non-veg’ dishes whose price is greater
than or equal to 400. Display in descending order of average price. Print table
with column names (food_type, avg_food_type).
### Solution: USED WHERE, GROUP BY, ORDER BY,

5. Print all ‘non-veg’ dishes whose price is greater than the maximum ‘veg’ dish.
Print table with column names (dish_name, price)
### Solution: USED INNER QUERY TO EXTRACT THE MAX VEG VALUE AND SOLVED THE QUERY OUTSIDE

## QUESTION 2 :
1. Retrieve a list of all users along with the titles and authors of the books they
have borrowed. Filter out records where title and/or author name is NULL.
Print table with column names (user_name, title, author_name).
### Solution: USED 2 INNER JOINS AND APPROPRIATE NOT NULL CONDITIONS

2. Count total issued users in each genre along with the genre name. Print
table with column names (genre, total_user_count).
### Solution: USED 1 INNER JOIN AND COUNT AND GROUP BY

3. Get the list of all book names, the author names and the latest (most recent)
date_issued for that book. Print table with column names (book_name,
author_name, recent_date_issued).
### Solution: USED 2 INNER JOINS AND ORDER BY

4. Retrieve the top three authors who have written the most books, along with
the total count of books each of these authors has written. Only display the
records if the book count is greater than or equal to 2. Display this in
decreasing order of book count. In cases where authors have the same book
count, their names should also be arranged in descending alphabetical
order. Print table with column names (author_name, book_count).
### Solution: USED 1 INNER JOIN AND COUNT AND GROUP BY, HAVING, COUNT , ORDER BY, LIMIT

5. Identify genres that users have not yet explored (issued any books from) and
recommend those genres to them. Print the table with column names
(user_name, genre).

### Solution: Use INNER JOIN and select those genre which are not read by user. (Not cmpleted)


