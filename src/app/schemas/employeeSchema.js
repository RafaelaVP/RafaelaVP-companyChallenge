const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
        enum: ['gerente', 'vendedor','caixa'],
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

Employees.plugin(mongoosePaginate);

module.exports = mongoose.model('employees', Employees);