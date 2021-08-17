#!/usr/bin/env python3
from flask import Flask, render_template

app = Flask(__name__)

#Display index page
@app.route("/")
def index():
    return render_template('tmp.html')







#Run script
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True)