
DROP PROCEDURE IF EXISTS divi;  

DELIMITER &&  
CREATE PROCEDURE divi(
IN	inp1 INT,
IN inp2 INT,
OUT result FLOAT 
)  
BEGIN  
	SET result = inp1 DIV inp2;  
    SELECT result;
END &&

DELIMITER ;  

CALL divi('100', ' 0', @result);  