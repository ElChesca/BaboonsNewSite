"""Función serverless de Vercel — GET /api/health.

Endpoint liviano para monitoreo y chequeos de uptime.
"""

from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/", defaults={"path": ""}, methods=["GET"])
@app.route("/<path:path>", methods=["GET"])
def health(path: str = "") -> tuple:
    _ = path
    return jsonify(status="ok", service="baboons-web-api"), 200


if __name__ == "__main__":
    app.run(port=3002, debug=True)
