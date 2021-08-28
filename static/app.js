// All JS code should be written in the form of functions and passed to HTML template

// Returns GMT - 00 time (calculated from local machine time)
function getUTCTime() {
  dt = new Date();
  utcdt = dt.toUTCString();
  return utcdt;
}
document.getElementById("utc").innerHTML = getUTCTime();

// Displays sun position
function getSunURL() {
  let url = "https://www.timeanddate.com/scripts/sunmap.php?iso=" 
  dt1 = new Date();
  yr = dt1.getUTCFullYear();
  mnth = dt1.getUTCMonth();
  mnthint = parseInt(mnth) + 1;
  dy = dt1.getUTCDate();
  hr = dt1.getUTCHours();
  mnts = dt1.getUTCMinutes();
  time =  url + yr + mnthint + dy + "T" + hr + mnts;
  htmtime = "<img src='" + time + "'>";
  document.getElementById('tzzz').innerHTML = htmtime;
  setTimeout(getSunURL, 20 * 60 * 1000);
}

// Get machine time
function getTime() {
  date = new Date();
  htmdate = "<strong>" + date + "</strong>";
  document.getElementById('loctime').innerHTML = htmdate;
  setTimeout(getTime, 1000);
}

// TimeZone converter
function convertTZ(date, tzString) {
  edited_time = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
  document.getElementById('test1').innerHTML = edited_time;
}