import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'biblioteca.settings')
django.setup()

from biblioteca1.models import Livro

def criar_livros():
    livros = [
        {"titulo": "Viagem ao centro da Terra", "autor": "Jules Verne", "ano_publicacao": 1954, "disponivel":True},
        {"titulo": "A ilha misteriosa", "autor": "Jules Verne", "ano_publicacao": 1899, "disponivel": True},
        {"titulo": "1984", "autor": "George Orwell", "ano_publicacao": 1949, "disponivel": False},
    ]

    for dados in livros:
        Livro.objects.get_or_create(**dados)

    print("Livros adicionados com sucesso!")

if __name__ == '__main__':
    criar_livros()