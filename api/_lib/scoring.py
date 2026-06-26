"""Lead scoring — lógica de negocio real, no solo 'enviar y listo'.

Calcula una prioridad para que el equipo comercial sepa a qué lead
responder primero. El resultado viaja en la notificación y en la respuesta.
"""

from .schemas import ContactPayload

_PRIORIDAD_RUBRO = {
    "concesionarias": 3,  # vertical nueva, foco comercial actual
    "distribucion": 2,
    "logistica": 2,
    "gastronomia": 1,
    "otro": 0,
}

_PRIORIDAD_TAMANO = {
    "50+": 3,
    "21-50": 2,
    "6-20": 1,
    "1-5": 0,
}


def calcular_prioridad(data: ContactPayload) -> str:
    """Devuelve 'alta' | 'media' | 'baja' según rubro, tamaño y pedido de demo."""
    puntaje = _PRIORIDAD_RUBRO.get(data.rubro, 0)
    puntaje += _PRIORIDAD_TAMANO.get(data.tamano, 0)
    if data.quiere_demo:
        puntaje += 2

    if puntaje >= 6:
        return "alta"
    if puntaje >= 3:
        return "media"
    return "baja"
