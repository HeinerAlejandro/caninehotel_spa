from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet

from .serializers import RoomSerializer
from .models import Room
# Create your views here.

class RoomViewSet(ModelViewSet):

	serializer_class = RoomSerializer
	queryset = Room.objects.all()
	lookup_field = 'number'
	lookup_url_kwarg  = 'number'
