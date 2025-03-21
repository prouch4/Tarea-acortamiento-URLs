from flask import Flask, request, jsonify, redirect
from flask_mysqldb import MySQL
from flask_cors import CORS
from nanoid import generate
import datetime
import config as cf

app = Flask(__name__)
CORS(app)

app.config["MYSQL_HOST"] = cf.MYSQL_CONFIG["host"]
app.config["MYSQL_USER"] = cf.MYSQL_CONFIG["user"]
app.config["MYSQL_DB"] = cf.MYSQL_CONFIG["db"]

mysql = MySQL(app)

@app.route('/shorten', methods=['POST'])
def shorten():
    data = request.json
    original_url = data.get("url")

    if not original_url:
        return jsonify({"error": "URL no proporcionada"}), 400

    short_code = generate(size=6)

    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO urls (original_url, short_code) VALUES (%s, %s)", (original_url, short_code))
    mysql.connection.commit()
    cur.close()

    return jsonify({"short_url": f"http://localhost:5000/{short_code}"})

@app.route('/<short_code>', methods=['GET'])
def redirect_url(short_code):
    cur = mysql.connection.cursor()
    cur.execute("SELECT original_url, clicks, expires_at FROM urls WHERE short_code = %s", (short_code,))
    result = cur.fetchone()

    if not result:
        return jsonify({"error": "URL no encontrada"}), 404

    original_url, clicks, expires_at = result

    if datetime.datetime.now() > expires_at:
        return jsonify({"error": "Esta URL ha expirado"}), 410

    cur.execute("UPDATE urls SET clicks = clicks + 1 WHERE short_code = %s", (short_code,))
    mysql.connection.commit()
    cur.close()

    return redirect(original_url)

if __name__ == '__main__':
    app.run(debug=True)
