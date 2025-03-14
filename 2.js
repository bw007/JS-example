const weeks = [
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
  "Yakshanba",
]

const dayOfWeek = (day) => {
  if (day >= 1 && day <= 7) return weeks[day - 1]
  return "none"
};

console.log(dayOfWeek(1));