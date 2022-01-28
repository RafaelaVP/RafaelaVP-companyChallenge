const FormatCPF = require('../utils/FormatCpf');
const FormatDate = require('../utils/FormatDate');

const serialize = ({ _id, name, cpf, birthday, office, situation }) => ({
  employee_id: _id,
  name,
  cpf: FormatCPF.format(cpf),
  birthday: FormatDate.formatDateToSerialize(birthday),
  office,
  situation
});

const paginatedSerialize = ({ docs, totalDocs, pagingCounter, totalPages }) => ({
  employees: docs.map(serialize),
  currentPage: pagingCounter,
  pageSize: docs.length,
  totalCount: totalDocs,
  totalPages
});

module.exports = { paginatedSerialize, serialize };
