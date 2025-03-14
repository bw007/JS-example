const leapYear = (year) => year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
console.log(leapYear(1900));
