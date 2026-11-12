from django.db import migrations

def forwards_func(apps, schema_editor):
    Book = apps.get_model('biblioteca1', 'Book')
    for book in Book.objects.all():
        if book.author:
            book.authors.add(book.author)

def reverse_func(apps, schema_editor):
    Book = apps.get_model('biblioteca1', 'Book')
    for book in Book.objects.all():
        first_author = book.authors.first()
        if first_author:
            book.author = first_author
            book.save()

class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca1', '0003_book_authors_alter_author_id_and_more'),
    ]

    operations = [
        migrations.RunPython(forwards_func, reverse_func),
    ]