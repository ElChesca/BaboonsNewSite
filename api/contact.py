"""Función serverless de Vercel — POST /api/contact.

Recibe el formulario de contacto del sitio, lo valida con Pydantic,
filtra spam, calcula la prioridad del lead y notifica al equipo.
Vercel detecta la variable `app` (WSGI) y la sirve automáticamente.
"""

import os
import sys

# Permite importar el paquete `_lib` cuando Vercel ejecuta este archivo.
sys.path.insert(0, os.path.dirname(__file__))

from flask import Flask, jsonify, request  # noqa: E402

from _lib.antispam import es_spam_honeypot, rate_limit_ok  # noqa: E402
from _lib.email import notificar_lead  # noqa: E402
from _lib.schemas import ContactPayload  # noqa: E402
from _lib.scoring import calcular_prioridad  # noqa: E402

try:  # pragma: no cover
    from pydantic import ValidationError
except ImportError:  # el entorno siempre tiene pydantic; guard defensivo
    ValidationError = Exception  # type: ignore[assignment, misc]

app = Flask(__name__)


@app.route("/", defaults={"path": ""}, methods=["POST"])
@app.route("/<path:path>", methods=["POST"])
def contact(path: str = "") -> tuple:
    # Vercel enruta /api/contact a este archivo; la ruta interna no importa.
    _ = path

    ip = (request.headers.get("x-forwarded-for", "") or "").split(",")[0].strip()
    if ip and not rate_limit_ok(ip):
        return jsonify(ok=False, error="rate_limited"), 429

    payload = request.get_json(silent=True) or {}

    # Honeypot: si el bot completó el campo oculto, fingimos éxito y cortamos.
    if es_spam_honeypot(payload):
        return jsonify(ok=True), 200

    try:
        data = ContactPayload.model_validate(payload)
    except ValidationError as exc:
        errores = {
            str(err["loc"][-1]): err["msg"] for err in exc.errors()  # type: ignore[attr-defined]
        }
        return jsonify(ok=False, errores=errores), 422

    prioridad = calcular_prioridad(data)
    try:
        notificar_lead(data, prioridad)
    except Exception as exc:  # noqa: BLE001 - no perdemos el lead por el proveedor
        print(f"[contacto] Error al notificar: {exc}")

    return jsonify(ok=True, prioridad=prioridad), 200


# Permite `python api/contact.py` para pruebas locales rápidas.
if __name__ == "__main__":
    app.run(port=3001, debug=True)
