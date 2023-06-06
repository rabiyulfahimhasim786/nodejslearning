//1. The code begins with the use of strict mode, which enforces stricter parsing and error handling.

'use strict';
//2. The `dbConn` variable is importing the database configuration from the `db.config.js` file located in the `config` directory.
var dbConn = require('./../../config/db.config');
//Employee object create
//3. The `Employee` function is defined as a constructor that takes an `employee` object as a parameter. This object represents the properties of an employee such as first name, last name, email, phone number, organization, designation, salary, status, creation date, and update date.
var Employee = function(employee){
  this.first_name     = employee.first_name;
  this.last_name      = employee.last_name;
  this.email          = employee.email;
  this.phone          = employee.phone;
  this.organization   = employee.organization;
  this.designation    = employee.designation;
  this.salary         = employee.salary;
  this.status         = employee.status ? employee.status : 1;
  this.created_at     = new Date();
  this.updated_at     = new Date();
};
//4. The `create` function is a static method of the `Employee` object that inserts a new employee into the database. It takes two parameters: `newEmp` (representing the new employee object to be inserted) and `result` (a callback function to handle the result of the database operation). It uses the `dbConn.query` method to execute an SQL INSERT statement and passes the `newEmp` object as the data to be inserted. If the insertion is successful, it returns the inserted employee's ID; otherwise, it returns an error.
Employee.create = function (newEmp, result) {
dbConn.query("INSERT INTO employees set ?", newEmp, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
//5. The `findById` function is another static method that retrieves an employee from the database based on the provided `id` parameter. It executes an SQL SELECT statement with a WHERE clause to match the employee's ID. If the query is successful, it returns the employee object; otherwise, it returns an error.


Employee.findById = function (id, result) {
dbConn.query("Select * from employees where id = ? ", id, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
// 6. The `findAll` function retrieves all employees from the database. It executes an SQL SELECT statement without any condition. If the query is successful, it returns an array of employee objects; otherwise, it returns an error.

Employee.findAll = function (result) {
dbConn.query("Select * from employees", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('employees : ', res);
  result(null, res);
}
});
};

//7. The `update` function updates an existing employee in the database. It takes three parameters: `id` (the ID of the employee to be updated), `employee` (the updated employee object), and `result` (a callback function to handle the result of the database operation). It executes an SQL UPDATE statement with the provided data. If the update is successful, it returns the result of the update operation; otherwise, it returns an error.
Employee.update = function(id, employee, result){
dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name,employee.last_name,employee.email,employee.phone,employee.organization,employee.designation,employee.salary, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
//8. In summary, this code provides a concise implementation of the delete method in the Employee model. It deletes an employee from the database table based on the provided id using a single database query. The result of the query, whether successful or containing an error, is passed to the result callback function for further handling.
Employee.delete = function(id, result){
  dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    result(null, res);
  }
  });
  };
// 9. Finally, the `module.exports` statement exports the `Employee` object so that it can be imported and used in other files.

module.exports= Employee;