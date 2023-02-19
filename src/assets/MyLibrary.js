export const myId = () => {
  let id = [];
  let base = "0123456789ABCDEF";

  for (let i = 0; i < 8; i++) {
    let numero = (Math.random() * 15).toFixed(0);
    id.push(base[numero]);
  }
  return id.join("");
};

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}
const formatMonth= (month)=>{

  switch (month){
    case '01':
      return 'Ene'
    case '02':
      return 'Feb'
    case '03':
      return 'Mar'
    case '04':
      return 'Abr'
    case '05':
      return 'May'
    case '06':
      return 'Jun'
    case '07':
      return 'Jul'
    case '08':
      return 'Ago'
    case '09':
      return 'Sep'
    case '10':
      return 'Oct'
    case '11':
      return 'Nov'
    case '12':
      return 'Dic'
    default:
        return
  }
}

export const formatDate = (date) => {
  return [
    padTo2Digits(date.getDate()),
    formatMonth(padTo2Digits(date.getMonth() + 1)),
    date.getFullYear(),
  ].join("/");
};