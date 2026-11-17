import datetime

from django.core.exceptions import ValidationError
from django.core.validators import MinLengthValidator, MinValueValidator, MaxValueValidator

def validar_titulo_livro(value):
    validator= MinLengthValidator(3)
    try:
        validator(value)
    except ValidationError:
        raise ValidationError(
            "O título do livro deve conter pelo menos 3 caracteres! Recebido: %(value)s",
            params={'value': value},
        )

def validar_ano(value):
    ano_atual = datetime.date.today().year
    min_val= MinValueValidator(1450)
    max_val= MaxValueValidator(ano_atual) 

    try:
        min_val(value)
        max_val(value)
    except ValidationError:
        raise ValidationError(
            "O ano de publicação deve ser entre 1450 e o ano atual! Recebido: %(value)s",
            params={'value': value},
        )

def validar_qtd_paginas(value):
    min_val= MinValueValidator(1)
    max_val= MaxValueValidator(5000)

    try:
        min_val(value)
        max_val(value)
    except ValidationError:
        raise ValidationError(
            "O livro deve ter entre 1 e 5000 páginas! Recebido: %(value)s",
            params={'value': value},
        )

def validar_isbn(value):
    value = value.strip()
    if len(value) != 13:
        raise ValidationError(
            "O código ISBN informado tem um número de caracteres diferente de 13! recebido %(value)s",
            params={'value': value},
        )
