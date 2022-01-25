const mongoose = require('mongoose');

const Employees = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true,
      unique: true
    },
    office: {
        type: String,
        enum: ['gerente', 'vendedor'],
        required: true
    },
    birthday: {
      type: String,
      required: true,
      select: false
    }
  },
  {
    timestamps: true
  }
);



module.exports = mongoose.model('employees', Employees);