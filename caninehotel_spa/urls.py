"""caninehotel_spa URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings

from rest_framework.routers import DefaultRouter

from pet.views import PetViewSet, OwnerViewSet

from service.views import ServiceViewSet

from room.views import RoomViewSet

router = DefaultRouter()

router.register(r'owners', OwnerViewSet, basename = 'owner')
router.register(r'pets', PetViewSet, basename = 'pet')
router.register(r'services', ServiceViewSet, basename = 'service')
router.register(r'rooms', RoomViewSet, basename = 'room')

urlpatterns = [
    path('', include(router.urls)),
    path('home', TemplateView.as_view(template_name = 'index.html'), name = 'home'),
    path('pet-web', TemplateView.as_view(template_name = 'pet.html') , name = 'pet'),
    path('room-web', TemplateView.as_view(template_name = 'room.html') , name = 'room'),
    path('service-web', TemplateView.as_view(template_name = 'service.html') , name = 'service'),
]

if settings.DEBUG:

	from django.contrib.staticfiles import views

	urlpatterns += re_path(r'^static/(?P<path>.*)$', views.serve),
