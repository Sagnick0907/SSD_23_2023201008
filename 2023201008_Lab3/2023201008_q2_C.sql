-- Get the list of all book names, the author names and the latest (most recent)date_issued for that book. Print table with column names 

SELECT title AS book_name, author_name, date_issued AS recent_date_issued
FROM SSDLab.issued_users as issued_users
INNER JOIN SSDLab.books as books ON issued_users.book_id = books.book_id
INNER JOIN SSDLab.authors as authors ON authors.author_id = books.author_id 
ORDER BY date_issued DESC;
