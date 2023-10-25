
SELECT dish_name, price
FROM SSDLab.menu
WHERE food_type = 'non-veg' AND price>(SELECT MAX(price) FROM SSDLab.menu WHERE food_type = 'veg');
