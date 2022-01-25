const mongoose = require('mongoose');

const Products = mongoose.Schema(
  {
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
        enum: ['gerente', 'vendedor'],
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