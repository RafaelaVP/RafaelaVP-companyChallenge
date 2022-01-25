const EmployeeService = require('../service/EmployeeService');

class EmployeeController {
    async create (req, res) {
        try {
            const result = await EmployeeService.create(req.body);
            return res.status(201).json(result)     
        } catch (error) {
            return res.status(400).json(error)
            
        }
    }
}

module.exports = new EmployeeController();