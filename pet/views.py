from django.views.generic import TemplateView
from django.shortcuts import render

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Pet, Owner
from room.models import Room
from .serializer import PetSerializer, OwnerSerializer


# ViewSets to API

class OwnerViewSet(viewsets.ModelViewSet):

	serializer_class = OwnerSerializer
	queryset = Owner.objects.all()

class PetViewSet(viewsets.ModelViewSet):

	serializer_class = PetSerializer
	queryset = Pet.objects.all()

	def destroy(self, request, pk):

		pet = Pet.objects.get(pk = pk)

		owner = Owner.objects.get(dni = pet.owner.dni).delete()

		return Response("Objeto eliminado satisfactoriamente", status = status.HTTP_200_OK)

