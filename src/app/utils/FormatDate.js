const moment = require('moment')
class FormatDate {
    formatDateToSerialize(date) {
      return moment(date, ).utc('YYYY-MM-DD').format('DD/MM/YYYY');
    }
    formatToBase(date) {
      return moment(date, 'DD/MM/YYYY').utc().format('YYYY-MM-DD');
    }
  }
  
  module.exports = new FormatDate();
  