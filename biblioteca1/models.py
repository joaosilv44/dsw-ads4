from django.db import models

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
    title = models.CharField(max_length=200)
    year = models.IntegerField()
    available= models.BooleanField(default=True)

    def __str__(self):
        return self.title


