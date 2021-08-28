// All JS code should be written in the form of functions and passed to HTML template

// Returns GMT - 00 time (calculated from local machine time)
function getUTCTime() {
  dt = new Date();
  utcdt = dt.toUTCString();
  return utcdt;
}
document.getElementById("utc").innerHTML = getUTCTime();
setTimeout(getTime, 1000);

// Displays sun position
window.onload = function getSunURL() {
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
  setTimeout(getSunURL, 20 * 60 * 1000);
  document.getElementById('sun_image').innerHTML = htmtime;
}

// Get machine time
function getTime() {
  date = new Date();
  htmdate = "<strong>" + date + "</strong>";
  setTimeout(getTime, 1000);
  document.getElementById('loctime').innerHTML = htmdate;
}

// TimeZone converter
function convertTZ(date, tzString) {
  edited_time = new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
  document.getElementById('test1').innerHTML = edited_time;
}