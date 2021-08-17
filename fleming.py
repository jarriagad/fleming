#!/usr/bin/env python3
from flask import Flask, render_template
import requests
import geocoder

g = geocoder.ip('me')

loc = "{0}, {1} {2}".format(g.city, g.state, g.country)
base_url = "http://worldtimeapi.org/api/timezone"
r = requests.get(base_url)
tz_list = r.json()

app = Flask(__name__)

#Display index page
@app.route("/")
def index():
  return render_template('tmp.html', g=loc)

@app.route("/about")
def about():
  return render_template('about.html')





#Run script
if __name__ == "__main__":
  app.run(host='0.0.0.0', port=80, debug=True)