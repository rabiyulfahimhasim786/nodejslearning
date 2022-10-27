CREATE DEFINER=`root`@`localhost` PROCEDURE `new_procedure`(
IN _EmpID INT,
IN _Name varchar(45),
IN _EmpCode varchar(45),
IN _Salary int
)
BEGIN
	IF _EmpID = 0 THEN
		INSERT INTO employee(NAME,EmpCode,Salary)
        VALUES (_Name,_EmpCode,_Salary);
        
        SET _EmpID = LAST_INSERT_ID();
	ELSE
        UPDATE Employee
        SET
        NAME = _Name,
        EmpCode = _EmpCode,
        Salary = _Salary
        Where EmpID = _EmpID;
	END IF;
    
    SELECT _EmpID As 'EmpID';
END