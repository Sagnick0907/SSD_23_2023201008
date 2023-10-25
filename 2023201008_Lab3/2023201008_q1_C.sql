
UPDATE SSDLab.menu  
SET price = CASE 
    WHEN food_type = 'veg' THEN price-1  
    WHEN food_type = 'non-veg' THEN price-5 END;
    
SELECT * FROM SSDLab.menu;