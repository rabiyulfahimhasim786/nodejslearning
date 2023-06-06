'use strict';
const Employee = require('../models/employee.model');
//findAll: This function is responsible for retrieving all employees from the database and sending the response back to the client. It calls the findAll method of the Employee model, which we discussed in the previous explanation. If an error occurs during the database operation, it sends the error as a response. Otherwise, it sends the retrieved employee data as a response.

exports.findAll = function(req, res) {
Employee.findAll(function(err, employee) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', employee);
  res.send(employee);
});
};
//create: This function handles the creation of a new employee. It receives the employee data from the client's request body and creates a new instance of the Employee model using that data. If the request body is empty or doesn't contain all the required fields, it sends an error response. Otherwise, it calls the create method of the Employee model to insert the new employee into the database. If the insertion is successful, it sends a success response with the newly created employee data; otherwise, it sends an error response.

exports.create = function(req, res) {
const new_employee = new Employee(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Employee.create(new_employee, function(err, employee) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Employee added successfully!",data:employee});
});
}
};
//findById: This function is responsible for retrieving a specific employee from the database based on the provided ID. It calls the findById method of the Employee model, passing the ID as a parameter. If an error occurs during the database operation, it sends the error as a response. Otherwise, it sends the retrieved employee data as a response.

exports.findById = function(req, res) {
Employee.findById(req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json(employee);
});
};
//update: This function handles the update of an existing employee. It first checks if the request body is empty or doesn't contain all the required fields. If so, it sends an error response. Otherwise, it calls the update method of the Employee model, passing the employee ID from the request parameters and a new instance of the Employee model created using the request body data. If the update is successful, it sends a success response; otherwise, it sends an error response.

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Employee.update(req.params.id, new Employee(req.body), function(err, employee) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Employee successfully updated' });
});
}
};
//delete: This function is responsible for deleting an employee from the database based on the provided ID. It calls the delete method of the Employee model, passing the ID as a parameter. If an error occurs during the database operation, it sends the error as a response. Otherwise, it sends a success response indicating that the employee has been successfully deleted.

exports.delete = function(req, res) {
Employee.delete( req.params.id, function(err, employee) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Employee successfully deleted' });
});
};