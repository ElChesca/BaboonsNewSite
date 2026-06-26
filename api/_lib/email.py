"""Notificación del lead al equipo comercial.

Usa Resend si hay credenciales en variables de entorno; si no, registra
el lead en los logs para no perder nada en desarrollo.
"""

import os

try:  # pragma: no cover - depende del entorno
    import resend
except ImportError:
    resend = None

from .schemas import ContactPayload


def notificar_lead(data: ContactPayload, prioridad: str) -> None:
    cuerpo = _formatear(data, prioridad)

    api_key = os.environ.get("RESEND_API_KEY")
    destino = os.environ.get("CONTACT_TO_EMAIL")
    remitente = os.environ.get("CONTACT_FROM_EMAIL", "web@baboons.co")

    if not api_key or not destino or resend is None:
        # Sin proveedor configurado: no perdemos el lead, queda en el log.
        print(f"[contacto] Lead recibido (email no configurado):\n{cuerpo}")
        return

    resend.api_key = api_key
    resend.Emails.send(
        {
            "from": remitente,
            "to": [destino],
            "subject": f"[{prioridad.upper()}] Nuevo lead — {data.empresa}",
            "text": cuerpo,
        }
    )


def _formatear(data: ContactPayload, prioridad: str) -> str:
    return "\n".join(
        [
            f"Prioridad: {prioridad}",
            f"Nombre:    {data.nombre}",
            f"Empresa:   {data.empresa}",
            f"Email:     {data.email}",
            f"Teléfono:  {data.telefono}",
            f"Rubro:     {data.rubro}",
            f"Tamaño:    {data.tamano}",
            f"Demo:      {'sí' if data.quiere_demo else 'no'}",
            f"Origen:    {data.pagina_origen or '-'}",
            f"UTM:       {data.utm_source or '-'}",
            "",
            "Mensaje:",
            data.mensaje,
        ]
    )
