
SELECT user_name, title, author_name
FROM SSDLab.issued_users as issued_users
INNER JOIN SSDLab.books as books ON issued_users.book_id = books.book_id
INNER JOIN SSDLab.authors as authors ON authors.author_id = books.author_id 
WHERE title IS NOT NULL AND author_name IS NOT NULL;


