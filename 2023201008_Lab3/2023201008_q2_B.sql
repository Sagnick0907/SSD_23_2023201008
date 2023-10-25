-- Count total issued users in each genre along with the genre name. Print table with column names

SELECT genre, COUNT(*) AS total_user_count
FROM SSDLab.issued_users as issued_users
INNER JOIN SSDLab.books as books ON issued_users.book_id = books.book_id
GROUP BY genre;

