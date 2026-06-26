"""Esquemas Pydantic v2 — validación del lado del servidor.

Espejan el schema Zod del frontend (src/components/forms/ContactForm.tsx).
Nunca se confía en lo que manda el cliente: todo se revalida acá.
"""

from pydantic import BaseModel, EmailStr, Field, field_validator

RUBROS = {"gastronomia", "distribucion", "logistica", "concesionarias", "otro"}
TAMANOS = {"1-5", "6-20", "21-50", "50+"}


class ContactPayload(BaseModel):
    nombre: str = Field(min_length=2, max_length=80)
    email: EmailStr
    telefono: str = Field(min_length=6, max_length=20)
    empresa: str = Field(min_length=2, max_length=120)
    rubro: str
    tamano: str
    mensaje: str = Field(min_length=10, max_length=2000)
    quiere_demo: bool = False
    # Contexto de marketing (opcional).
    utm_source: str | None = Field(default=None, max_length=120)
    pagina_origen: str | None = Field(default=None, max_length=200)

    @field_validator("nombre", "empresa", "mensaje")
    @classmethod
    def limpiar_texto(cls, value: str) -> str:
        return value.strip()

    @field_validator("email")
    @classmethod
    def normalizar_email(cls, value: str) -> str:
        return value.strip().lower()

    @field_validator("rubro")
    @classmethod
    def validar_rubro(cls, value: str) -> str:
        if value not in RUBROS:
            raise ValueError("Elegí un rubro válido")
        return value

    @field_validator("tamano")
    @classmethod
    def validar_tamano(cls, value: str) -> str:
        if value not in TAMANOS:
            raise ValueError("Elegí un tamaño válido")
        return value
