const dayList = [
  [ 'Sunday' ],
  [ 'Monday' ],
  [ 'Tuesday' ],
  [ 'Wednesday' ],
  [ 'Thursday' ],
  [ 'Friday' ],
  [ 'Saturday' ],
];
const day = new Date;
const todayDate = dayList[ day.getDay() ];

export default todayDate;