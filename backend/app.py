from flask import Flask
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/YOURAPP/*": {"origins": "*"}})

main_data = {"title": "Main Page", "text": "Hello from Python! Main Page."}
second_data = {"title": "Second Page", "text": "Hello from Python! Second Page."}

@app.route("/", methods = ['GET'])
@cross_origin()
def main_page():
    return json.dumps(main_data)

@app.route("/page", methods = ['GET'])
@cross_origin()
def second_page():
    return json.dumps(second_data)

if __name__ == "__main__":
    app.run()