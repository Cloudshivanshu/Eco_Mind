from django.contrib import admin
from django.urls import path,include
from Main_App import views
urlpatterns = [
    path('',views.index,name = 'Main_App'),
    # path('start/',views.start,name = 'start'),
    path('beginner/',views.beginner,name = 'beginner'),
    path('start/',views.game,name = 'game'),
    path('create_profile/',views.create_profile,name = "create_profile"),
    path('show_profile/',views.show_profile,name = "show_profile")
]