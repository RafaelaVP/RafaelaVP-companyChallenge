const moment = require('moment')
class FormatDate {
    formatDateToRequest(date) {
      return moment(date, ).utc('YYYY-MM-DD').format('DD/MM/YYYY');
    }
  }
  
  module.exports = new FormatDate();
  