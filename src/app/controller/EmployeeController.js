const { paginatedSerialize, serialize } = require('../serialize/employeeSerialize');
const EmployeeService = require('../service/EmployeeService');

class EmployeeController {
  async create(req, res) {
    try {
      const result = await EmployeeService.create(req.body);
      return res.status(201).json(serialize(result));
    } catch (error) {
      return res.status(400).json({
        message: error.message,
        details: {
          description: error.description
        }
      });
    }
  }

  async getAll(req, res) {
    try {
      const result = await EmployeeService.findAll(req.query);
      return res.status(200).json(paginatedSerialize(result));
    } catch (error) {
      return res.status(400).json({
        message: error.message,
        details: {
          description: error.description
        }
      });
    }
  }

  async update(req, res) {
    try {
      const { employee_id } = req.params;
      const update = req.body;
      const result = await EmployeeService.update(employee_id, update);
      return res.status(200).json(serialize(result));
    } catch (error) {
      return res.status(400).json({
        message: error.message,
        details: {
          description: error.description
        }
      });
    }
  }

  async delete(req, res) {
    try {
      const { employee_id } = req.params;
      await EmployeeService.delete(employee_id);
      return res.status(204).json({});
    } catch (error) {
      return res.status(400).json({
        message: error.message,
        details: {
          description: error.description
        }
      });
    }
  }
}

module.exports = new EmployeeController();
