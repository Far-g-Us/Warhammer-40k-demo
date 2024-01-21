from django.urls import path
from .views import *

urlpatterns = [
    path('game/', game_view, name='home'),
]