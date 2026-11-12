from django.urls import path
from . import views

urlpatterns = [
    path('', views.listar_livros),
    path(
        "autores/<int:author_id>/",views.author_detail,name="author_detail"),
    path('autores/new/', views.cadastrar_autor, name="cadastrar_autor"),

]
