from django.shortcuts import render

from rest_framework import viewsets

from .models import Pet, Owner
from .serializer import PetSerializer, OwnerSerializer


# Create your views here.

class OwnerViewSet(viewsets.ModelViewSet):

	serializer_class = OwnerSerializer
	queryset = Owner.objects.all()

class PetViewSet(viewsets.ModelViewSet):

	serializer_class = PetSerializer
	queryset = Pet.objects.all()

