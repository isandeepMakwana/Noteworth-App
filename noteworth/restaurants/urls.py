from django.contrib import admin
from django.urls import path,include
from rest_framework import routers  # add this
from restaurants import views


urlpatterns = [

    path('restaurants/', views.RestaurantList.as_view()),
    path('restaurants/<int:pk>/', views.RestaurantDetail.as_view()),
]
