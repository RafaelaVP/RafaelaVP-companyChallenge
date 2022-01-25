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
    async getAll(req, res) {
        try {
            const result = await EmployeeService.findAll(req.query)
            return res.status(200).json(result)
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    async update(req, res) {
        try {
          const { id } = req.params;
          const update = req.body;
          const result = await EmployeeService.update(id, update);
          return res.status(200).json(result);
        } catch (error) {
          return res.status(400).json({ message: error.message });
        }
      }
    
      async delete(req, res) {
        try {
          const { id } = req.params;
          const result = await EmployeeService.delete(id);
          return res.status(204).json(result);
        } catch (error) {
          return res.status(400).json({ message: error.message });
        }
      }
    
      async getById(req, res) {
        try {
          const { _id } = req.params;
          const result = await EmployeeService.getById(_id);
          return res.status(200).json(result);
        } catch (error) {
          return res.status(400).json(message.error);
        }
      }
    
}

module.exports = new EmployeeController();