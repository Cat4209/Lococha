from flask import Flask, render_template 
from config import CONFIGURATION

app = Flask(__name__)

app.config.from_object(CONFIGURATION)

@app.route("/")
def main():
   return render_template('main/index.html') 

if(__name__ == "__main__"):
    app.run(debug=True)