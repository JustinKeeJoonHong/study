from flask import Flask, request

app = Flask(__name__)

@app.route('/headers')
def headers():
    auth_header =request.headers['Authorization']

    header_parts = auth_header.split(' ')[1]
    print(header_parts)
    return 'not implemented'