DROP PROCEDURE IF EXISTS gradeDetails;  
        
DELIMITER ??
CREATE PROCEDURE gradeDetails() 

BEGIN
	-- Declare a variable to control the loop
    DECLARE done INT DEFAULT FALSE;
    
    -- Declare variables to store customer rows of data
    DECLARE custname varchar(40);
	DECLARE custcountry varchar(20);
    DECLARE grades decimal(10,0);
    DECLARE agentcode varchar(6);
	
    DECLARE cur CURSOR FOR
		
        SELECT
			CUSTOMER_DB.customer.CUST_NAME,
            CUSTOMER_DB.customer.CUST_COUNTRY,
            CUSTOMER_DB.customer.GRADE,
            CUSTOMER_DB.customer.AGENT_CODE
        FROM CUSTOMER_DB.customer;
	
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;
        -- Open the cursor to start fetching data
		OPEN cur;
        
        read_loop: LOOP
			FETCH cur INTO custname, custcountry, grades, agentcode;
			
			-- If there's no more data, exit the loop
			IF done THEN
				LEAVE read_loop;
			END IF;
			BEGIN
				IF agentcode LIKE "A00%" THEN
					SELECT custname, custcountry, grades;       
				END IF;
			END;
		END LOOP;
    CLOSE cur;
    
END;
??
DELIMITER ;

CALL gradeDetails();  


