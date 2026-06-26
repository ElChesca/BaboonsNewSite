"""Anti-spam sin fricción: honeypot + rate limiting por IP."""

import time

# Ventana de rate limit. En serverless el estado en memoria no es 100%
# confiable entre invocaciones, pero frena ráfagas dentro de una instancia
# caliente. Para producción a escala conviene un store compartido
# (por ejemplo Upstash Redis).
_VENTANA_SEGUNDOS = 600
_MAX_ENVIOS = 5
_registro: dict[str, list[float]] = {}


def rate_limit_ok(ip: str) -> bool:
    """Devuelve False si la IP superó el máximo de envíos en la ventana."""
    ahora = time.time()
    envios = [t for t in _registro.get(ip, []) if ahora - t < _VENTANA_SEGUNDOS]
    if len(envios) >= _MAX_ENVIOS:
        _registro[ip] = envios
        return False
    envios.append(ahora)
    _registro[ip] = envios
    return True


def es_spam_honeypot(payload: dict) -> bool:
    """El campo honeypot 'website' debe llegar vacío.

    Está oculto en el formulario, así que una persona nunca lo completa;
    los bots sí. Si trae algo, es spam.
    """
    return bool(str(payload.get("website", "")).strip())
