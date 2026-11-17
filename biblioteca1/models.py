from django.db import models
from .validators import validar_titulo_livro, validar_ano, validar_qtd_paginas, validar_isbn

class Author(models.Model):
    name = models.CharField(max_length=200, blank=True)
    nationality = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]
        verbose_name_plural = "autores"


class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Book(models.Model):
    authors = models.ManyToManyField(
        Author,
        related_name="books",
    )
    categories = models.ManyToManyField(    
        Category,
        blank=True,
    )
    title = models.CharField(max_length=200, validators=[validar_titulo_livro])
    year = models.IntegerField(validators=[validar_ano])
    available= models.BooleanField(default=True)
    pages= models.IntegerField(null=True, blank=True, validators=[validar_qtd_paginas])
    isbn= models.CharField(null=True, blank=True, validators=[validar_isbn])

    def __str__(self):
        return self.title


