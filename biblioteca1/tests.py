from django.test import TestCase
from .models import Livro

class LivroTestCase(TestCase):
    def setUp(self):
        
        Livro.objects.create(titulo="Viagem ao centro da Terra", autor="Jules Verne", ano_publicacao=1954, disponivel=True)
        Livro.objects.create(titulo="A ilha misteriosa", autor="Jules Verne", ano_publicacao=1899, disponivel=True)
        Livro.objects.create(titulo="1984", autor="George Orwell", ano_publicacao=1949, disponivel=False)

    def test_livros_criados(self):
        total = Livro.objects.count()
        self.assertEqual(total, 3)