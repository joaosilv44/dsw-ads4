from django import forms
from django.core.exceptions import ValidationError
from datetime import date

from .models import Author, Book


class LivroForm(forms.ModelForm):
    class Meta:
        model = Book
        fields = ['authors', 'categories', 'title', 'year', 'available']

        labels = {
            'authors': 'Autores',
            'categories': 'Categorias',
            'title': 'Título',
            'year': 'Ano',
            'available': 'Ativo',
        }

        error_messages = {
            'title': {
                'required': 'O título do livro é obrigatório.',
            },
            'year': {
                'required': 'O ano de publicação é obrigatório.',
                'invalid': 'Informe um ano válido.',
            },
            'authors': {
                'required': 'Selecione pelo menos um autor.',
            },
        }

        widgets = {
            'categories': forms.CheckboxSelectMultiple(),
        }

        def clean_title(self):
            title = self.cleaned_data['title']

            title = ' '.join(title.split())

            if len(title) < 3:
                raise ValidationError(
                    'O título precisa ter pelo menos 3 caracteres.'
                )

            return title

    def clean_year(self):
        year = self.cleaned_data['year']

        ano_atual = date.today().year

        if year > ano_atual:
            raise ValidationError(
                f'O ano não pode ser posterior a {ano_atual}. '
                'Informe um ano válido.'
            )

        return year


class AutorForm(forms.ModelForm):
    class Meta:
        model = Author
        fields = ['name', 'nationality']

        labels = {
            'name': 'Nome',
            'nationality': 'Nacionalidade',
        }

        error_messages = {
            'name': {
                'required': 'O nome do autor é obrigatório.',
            }
        }