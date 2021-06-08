export  function calColumn(date,columns) {
  const weeks = ["日", "月", "火", "水", "木", "金", "土"];
  let result = Object.assign([], columns)
  const dt =
    date ?
      new Date(date.split(' ').slice(0,5).join(' '))
    :
      new Date()
  for (var i = 1; i <= 15; i++) {
    result.push({width:60,label:`${i}(${weeks[dt.getDay()]})`});
    dt.setDate(dt.getDate() + 1)
  }
  return result
}

export function multidimensional_array_set(customers,seatID,customerID,value,idx) {
  let result = Object.assign(customers)
  if (result[seatID] && result[seatID][customerID]){
    result[seatID][customerID][`${idx}`] = value;
  }else{
    result[seatID][customerID] = {[idx]: value};
  }
  return result;
}
