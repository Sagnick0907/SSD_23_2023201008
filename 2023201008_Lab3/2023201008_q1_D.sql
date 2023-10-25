
SELECT food_type, AVG(price)
FROM SSDLab.menu 
WHERE price >= 400
GROUP BY food_type
ORDER BY COUNT(price) DESC;
