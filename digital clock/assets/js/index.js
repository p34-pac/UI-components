import { TheDate } from "./date.js";

// console.log(TheDate())
let format = 24;
let checked = false;
let timebox = [];
let datebox = [];
let DC = document.querySelectorAll(".digital-clock-container");
for (const key in DC) {
  if (Object.hasOwnProperty.call(DC, key)) {
    const DCk = DC[key];
    for (const key in DCk.children) {
      if (Object.hasOwnProperty.call(DCk.children, key)) {
        const DCkC = DCk.children[key];
        console.log(DCkC);
        if (DCkC.classList.contains("time")) {
          timebox.push(DCkC);
        }
        if (DCkC.classList.contains("date")) {
          datebox.push(DCkC);
        }
      }
    }
  }
}
console.log(timebox);

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.classList.contains("checkbox")) {
    e.target.classList.toggle("checked");
    if (e.target.classList.contains("checked")) {
      checked = true;
      e.target.classList.add('show24')
    } else {
      checked = false;
    }
    if (checked) {
      format = 24;
      document.querySelector("label[for= timeFormat]").textContent =
        "24 Hours Format";
      showTime24Hrs();
    } else {
      format = 12;
      document.querySelector("label[for= timeFormat]").textContent =
        "12 Hours Format";
      showTime12Hrs();
    }
  }
});


let { hour, mins, day, fullMonth, secs, shortMonth, year, moment, hour12 } =
  TheDate();
let h = hour,
  h12 = hour12,
  m = mins,
  s = secs,
  d = day,
  fulM = fullMonth,
  shoM = shortMonth,
  y = year,
  mom = moment;
// let timeBox = document.querySelector('.time');

function setItem(Name, format) {
  let { hour, mins, day, fullMonth, secs, shortMonth, year, moment, hour12 } =
    TheDate();
  timebox.forEach((timeBox) => {
    for (const key in timeBox.children) {
      if (Object.hasOwnProperty.call(timeBox.children, key)) {
        const timeKid = timeBox.children[key];
        if (timeKid.classList.contains(`${Name}`)) {
          switch (Name) {
            case "hour":
              if (format == 12) {
                timeKid.textContent = `${hour12}`;
              } else if (format == 24) {
                timeKid.textContent = `${hour}`;
              }
              break;
            case "mins":
              timeKid.textContent = `${mins}`;
              break;
            case "secs":
              timeKid.textContent = `${secs}`;
              break;
            case "moment":
              timeKid.textContent = `${moment}`;
              break;
            default:
              break;
          }
        }
      }
    }
  });
}
function setItemDay(Name) {
  let { shortMonth, year, shortDay } = TheDate();
  datebox.forEach((dateBox) => {
    for (const key in dateBox.children) {
      if (Object.hasOwnProperty.call(dateBox.children, key)) {
        const dateKid = dateBox.children[key];
        if (dateKid.classList.contains(`${Name}`)) {
          switch (Name) {
            case "day":
              dateKid.textContent = `${shortDay}`;
              break;
            case "month":
              dateKid.textContent = `${shortMonth}`;
              break;
            case "year":
              dateKid.textContent = `${year}`;
              break;
            default:
              break;
          }
        }
      }
    }
  });
}
function showTime24Hrs() {
  let { hour, mins, day, fullMonth, secs, shortMonth, year, moment, hour12 } =
    TheDate();
  if (h != hour) {
    h = hour;
    setItem("hour", 24);
  } else {
    setItem("hour", 24);
  }
  if (m != mins) {
    m = mins;
    setItem("mins", 24);
  } else {
    setItem("mins", 24);
  }
  if (s != secs) {
    s = secs;
    setItem("secs", 24);
  } else {
    setItem("secs", 24);
  }
  if (mom != moment) {
    mom = moment;
    setItem("moment", 24);
  } else {
    setItem("moment", 24);
  }
}
function showTime12Hrs() {
  let { hour, mins, day, fullMonth, secs, shortMonth, year, moment, hour12 } =
    TheDate();
  if (h12 != hour12) {
    h12 = hour12;
    setItem("hour", 12);
  } else {
    setItem("hour", 12);
  }
  if (m != mins) {
    m = mins;
    setItem("mins", 12);
  } else {
    setItem("mins", 12);
  }
  if (s != secs) {
    s = secs;
    setItem("secs", 12);
  } else {
    setItem("secs", 12);
  }
  if (mom != moment) {
    mom = moment;
    setItem("moment", 12);
  } else {
    setItem("moment", 12);
  }
}
function showDate() {
  let { day, fullMonth, shortMonth, year } = TheDate();
  if (d != day) {
    d = day;
    setItemDay("day");
  } else {
    setItemDay("day");
  }
  if (shoM != shortMonth) {
    shoM = shortMonth;
    setItemDay("month");
  } else {
    setItemDay("month");
  }
  if (y != year) {
    y = year;
    setItemDay("year");
  } else {
    setItemDay("year");
  }
}
setInterval(() => {
  if (format == 12) {
    showTime12Hrs();
  } else if (format == 24) {
    showTime24Hrs();
  }
  showDate();
}, 1000);
