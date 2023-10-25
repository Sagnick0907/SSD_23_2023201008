
SELECT user_name, genre
FROM SSDLab.issued_users as issued_users
INNER JOIN SSDLab.books as booksout ON issued_users.book_id = booksout.book_id
GROUP BY user_name
HAVING genre NOT IN(
	SELECT genre FROM SSDLab.books WHERE book_id = SSDLab.issued_users.book_id and genre = booksout.genre
);
