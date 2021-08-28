function getUTCTime() {
  dt = new Date();
  utcdt = dt.toUTCString();
  return utcdt;
}

document.getElementById("utc").innerHTML = getUTCTime();