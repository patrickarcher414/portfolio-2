
function getDayOfYear(date = new Date()) {
  const timestamp1 = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  );
  const timestamp2 = Date.UTC(date.getFullYear(), 0, 0);

  const differenceInMilliseconds = timestamp1 - timestamp2;

  const differenceInDays = differenceInMilliseconds / 1000 / 60 / 60 / 24;

  return differenceInDays;
}

export default getDayOfYear