const moment = require('moment');

class FormatDate {
  formatDateToSerialize(date) {
    return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
  }

  formatToBase(date) {
    return moment(date, 'DD/MM/YYYY').format('YYYY-MM-DD');
  }
}

module.exports = new FormatDate();
