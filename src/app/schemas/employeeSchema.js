const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { randomUUID } = require('crypto');
const Employees = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      default: randomUUID
  
    },
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
    situation: {
      type: String,
      required: true,
      default: 'active'
    },
    birthday: {
      type: Date,
      required: true,
    }
  },
 
  {
    timestamps: true
  }
);

Employees.plugin(mongoosePaginate);

module.exports = mongoose.model('employees', Employees);