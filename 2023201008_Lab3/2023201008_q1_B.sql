
ALTER TABLE SSDLab.menu ADD food_type char(10);
UPDATE SSDLab.menu SET food_type = 'veg';
UPDATE SSDLab.menu SET food_type = 'non-veg' WHERE dish_name LIKE '%Chicken%';


SELECT * FROM SSDLab.menu;