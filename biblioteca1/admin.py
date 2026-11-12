from django.contrib import admin
from .models import Book, Author, Category

class BookInLine(admin.TabularInline):
    model = Book
    extra = 0

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ("title", "display_authors", "year", "available")
    search_fields = ('title', 'authors__name')
    list_filter = ("available", "categories")
    filter_horizontal = ("authors",)

    def display_authors(self, obj):
        return ", ".join([author.name for author in obj.authors.all()])
    display_authors.short_description = 'Autores'

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

admin.site.register(Category)