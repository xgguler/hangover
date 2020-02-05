import moment from 'moment/moment';

// format amount in case the amount is greater than zero or not.
export const formatAmount = value => {
  /**  const formatter = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return formatter.format(value);
 */
  return value < 0 ? '-$' + Math.abs(value).toFixed(2) : '$' + value.toFixed(2);
};

// format current week to DD, MMM, YYYY format.
export const getFormattedCurrentWeek = () => {
  let m = moment();
  return (
    m.startOf('week').format('DD') +
    ' - ' +
    m.endOf('week').format('DD ') +
    m.format('MMM, YYYY')
  );
};

// format current month to MMMM, YYYY format.
export const getFormattedCurrentMonth = () => {
  let m = moment();
  return m.format('MMMM, ') + m.format('YYYY');
};
