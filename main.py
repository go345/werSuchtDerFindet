from flask import Flask, render_template, send_file

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("./index.html")

@app.route('/main.js')
def main_js():
    return send_file('main.js')

@app.route('/style.css')
def style_css():
    return send_file('style.css')

@app.route("/getQuestion")
def getQuestion():
    with open("data.csv", "r") as file:
        data = file.readlines()
        return data[int(data[0])].split(";")[0]
    
@app.route("/compareResult")
def compareResult():
    with open("data.csv", "r") as file:
        data = file.readlines()
        return data[int(data[0])].split(";")[1] == 

if __name__ == '__main__':
    app.run(debug=True)