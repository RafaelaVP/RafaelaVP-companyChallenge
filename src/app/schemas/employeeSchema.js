const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { enumOffice } = require('../utils/enum');

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
      enum: enumOffice,
      required: true
    },
    situation: {
      type: String,
      required: true,
      default: 'active'
    },
    birthday: {
      type: String,
      required: true
    }
  },

  {
    timestamps: true
  }
);

Employees.plugin(mongoosePaginate);

module.exports = mongoose.model('employees', Employees);
