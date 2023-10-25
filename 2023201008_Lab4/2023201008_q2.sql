DROP PROCEDURE IF EXISTS paymentProcedure;  

DELIMITER ??
CREATE PROCEDURE paymentProcedure(IN payment INT)
BEGIN
	SELECT
			CUSTOMER_DB.customer.CUST_NAME,
            CUSTOMER_DB.customer.CUST_CITY
	FROM CUSTOMER_DB.customer WHERE CUSTOMER_DB.customer.PAYMENT_AMT>payment; 
END;
??
DELIMITER ;

CALL paymentProcedure('5000');  


