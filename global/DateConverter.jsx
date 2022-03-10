let date = "";
let year = "";
let month = "";
let dateInWeek = "";
let isWeekend = false;
const convertDateInWeek = () => {
  switch (dateInWeek) {
    case "Mon":
      dateInWeek = "T2";
      isWeekend = false;
      break;
    case "Tue":
      dateInWeek = "T3";
      isWeekend = false;
      break;
    case "Wed":
      dateInWeek = "T4";
      isWeekend = false;
      break;
    case "Thu":
      dateInWeek = "T5";
      isWeekend = false;
      break;
    case "Fri":
      dateInWeek = "T6";
      isWeekend = false
      break;
    case "Sat":
      dateInWeek = "T7";
      isWeekend = true;
      break;
    case "Sun":
      dateInWeek = "CN";
      isWeekend = true;
      break;
  }
};
const convertMonth = () => {
  switch (month) {
    case "Jan":
      month = "01";
      break;
    case "Feb":
      month = "02";
      break;
    case "Mar":
      month = "03";
      break;
    case "Apr":
      month = "04";
      break;
    case "May":
      month = "05";
      break;
    case "Jun":
      month = "06";
      break;
    case "Jul":
      month = "07";
      break;
    case "Aug":
      month = "08";
      break;
    case "Sep":
      month = "09";
      break;
    case "Oct":
      month = "10";
      break;
    case "Nov":
      month = "11";
      break;
    case "Dec":
      month = "12";
      break;
  }
};

export const convert = (datetime) => {
  const data = datetime.toDateString().split(" ");
  dateInWeek = data[0];
  month = data[1];
  date = data[2];
  year = data[3];
  convertDateInWeek();
  convertMonth();
  return {
    text: dateInWeek + " " + "(" + date + "/" + month + ")",
    isWeekend: isWeekend,
  };
};

export const convertBirthday = (datetime) =>{
  const data = datetime.toDateString().split(" ");
  month = data[1];
  date = data[2];
  year = data[3];
  convertMonth();
  return date + "-" + month + "-" + year;
}