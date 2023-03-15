 const formatDate = (date) => {
    const _date = new Date(date);
    let month = `${_date.getMonth() + 1}`;
    let day = `${_date.getDate()}`;
    const year = _date.getFullYear();
  
    if (month.length < 2) { month = `0${month}`; }
    if (day.length < 2) { day = `0${day}`; }
  
    return [year, month, day].join('-');
  };

  export default formatDate