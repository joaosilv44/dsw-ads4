from django.shortcuts import render, redirect, get_object_or_404
from .models import Book, Author
from .forms import AutorForm, LivroForm

def listar_livros(request):
    books = Book.objects.all()

    return render(request, 'listar_livros.html', {'books': books})


def criar_editar_livro(request, pk=None):

    if pk:
        livro = get_object_or_404(Book, pk=pk)
    else:
        livro = Book()

    if request.method == 'POST':
        form = LivroForm(request.POST, instance=livro)

        if form.is_valid():
            livro = form.save()

            autor = livro.authors.first()

            return redirect(
                'author_detail',
                author_id=autor.id
            )

    else:
        form = LivroForm(instance=livro)

    context = {
        'form': form,
        'modo_edicao': bool(pk),
        'livro': livro,
    }

    return render(request, 'form_livro.html', context)
        

def author_detail(request, author_id):
    author = get_object_or_404(Author, id=author_id)
    books = author.books.all()

    return render(request, "author_details.html", {
        "author": author,
        "books": books,
    })

def cadastrar_autor(request):
    if request.method == 'POST':
        form = AutorForm(request.POST)
        if form.is_valid():
            author = form.save()

            return redirect('author_detail', author_id=author.id)
    else:
        form = AutorForm()

    return render(request, "form_autor.html", {"form": form})
