const mongoose = require('mongoose');
const { randomUUID } = require('crypto');
const Products = mongoose.Schema(
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
    category: {
      type: String,
      required: true,
    },
    price: {
        type: Number,
        required: true
    },
    employee_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employees',
      required: true,
    }
  },
  {
    timestamps: true
  }
);



module.exports = mongoose.model('products', Products);