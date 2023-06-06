const express = require('express')

//1. The code imports the Express.js library and creates a router object using `express.Router()`.

const router = express.Router()

//2. It imports the `employeeController` object from the `employee.controller.js` file (presumably containing the controller functions for employee operations).


const employeeController =   require('../controllers/employee.controler');

//3. The following routes are defined using the router object:

// Retrieve all employees

//- `GET /`: This route is used to retrieve all employees. It maps to the `findAll` function of the `employeeController`.
router.get('/', employeeController.findAll);
// Create a new employee

//- `POST /`: This route is used to create a new employee. It maps to the `create` function of the `employeeController`.

router.post('/', employeeController.create);
// Retrieve a single employee with id

//- `GET /:id`: This route is used to retrieve a single employee based on the provided ID. It maps to the `findById` function of the `employeeController`. The `:id` is a route parameter that allows dynamic identification of the specific employee.

router.get('/:id', employeeController.findById);
// Update a employee with id

//- `PUT /:id`: This route is used to update an employee based on the provided ID. It maps to the `update` function of the `employeeController`.

router.put('/:id', employeeController.update);
// Delete a employee with id

//- `DELETE /:id`: This route is used to delete an employee based on the provided ID. It maps to the `delete` function of the `employeeController`.

router.delete('/:id', employeeController.delete);

//4. Finally, the code exports the router object using `module.exports`, making it available for use in other files.

module.exports = router