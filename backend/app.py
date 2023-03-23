from flask import Flask, request, Response
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)

main_data = {"title": "Main Page", "text": "Hello from Python! Main Page."}
second_data = {"title": "Second Page", "text": "Hello from Python! Second Page."}

@app.route("/", methods = ['GET', "POST"])
def main_page():
    if request.method == 'POST':
        print(json.loads(request.data))
        return Response(status=200)
    else:
        return json.dumps(main_data)

@app.route("/page", methods = ['GET'])
def second_page():
    return json.dumps(second_data)

if __name__ == "__main__":
    app.run()