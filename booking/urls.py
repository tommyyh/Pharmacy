from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('booking/', views.booking, name='booking-page'),
    path('new-date/', views.new_date, name='new-date')
]
