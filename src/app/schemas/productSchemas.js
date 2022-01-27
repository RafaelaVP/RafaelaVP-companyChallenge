const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Products = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    employee_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Employees',
      required: true
    }
  },
  {
    timestamps: true
  }
);

Products.plugin(mongoosePaginate);
module.exports = mongoose.model('products', Products);
