#!/usr/bin/env python3
from flask import Flask, render_template
from deflib import getTZList, getLoc

app = Flask(__name__)

#Display index page
@app.route("/")
def index():
  return render_template('tmp.html', g=getLoc())

@app.route("/about")
def about():
  return render_template('about.html', g=getLoc())

@app.route("/tz-list")
def tz_list():
  return render_template('tz_list.html', tzl=getTZList(), g=getLoc())

#Run script
if __name__ == "__main__":
  app.run(host='0.0.0.0', port=80, debug=True)