-- Retrieve the top three authors who have written the most books, along with
-- the total count of books each of these authors has written. Only display the
-- records if the book count is greater than or equal to 2. Display this in
-- decreasing order of book count. In cases where authors have the same book
-- count, their names should also be arranged in descending alphabetical
-- order. Print table with column names (author_name, book_count). 

SELECT author_name, COUNT(*) AS book_count
FROM SSDLab.authors as authors
INNER JOIN SSDLab.books as books ON authors.author_id = books.author_id
GROUP BY authors.author_name
HAVING COUNT(*)>=2
ORDER BY book_count desc, authors.author_name desc
LIMIT 3;
