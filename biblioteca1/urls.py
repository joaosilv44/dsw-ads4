from django.urls import path
from . import views

urlpatterns = [
    path('', views.listar_livros, name="listar_livros"),
    path("autores/<int:author_id>/",views.author_detail,name="author_detail"),
    path('autores/new/', views.cadastrar_autor, name="cadastrar_autor"),
    path('livros/criar/', views.criar_editar_livro, name="criar_livro"),
    path('<int:pk>/editar/',views.criar_editar_livro, name="editar_livro")
]
