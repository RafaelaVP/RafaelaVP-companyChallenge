const serialize = ({ _id, name, category, price, employee_id }) => ({
  product_id: _id,
  name,
  category,
  price,
  employee_id
});

const paginatedSerialize = ({ docs, totalDocs, pagingCounter, totalPages }) => ({
  products: docs.map(serialize),
  currentPage: pagingCounter,
  pageSize: docs.length,
  totalCount: totalDocs,
  totalPages
});

module.exports = { paginatedSerialize, serialize };
