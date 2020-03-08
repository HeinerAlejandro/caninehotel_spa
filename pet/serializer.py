from django.contrib.auth import get_user_model

from rest_framework import serializers

from .models import Pet, Owner
from service.serializer import ServiceSerializer
from room.models import Room
from service.models import Service

class OwnerSerializer(serializers.ModelSerializer):

	class Meta:
		model = get_user_model()
		fields = (
			'dni',
			'first_name',
			'last_name',
			'email',
			'contact'
		)

class PetSerializer(serializers.ModelSerializer):

	owner = OwnerSerializer()

	class Meta:
		model = Pet
		fields = '__all__'


	def create(self, validated_data):
		
		owner, created = Owner.objects.get_or_create(**validated_data.pop('owner'))
		
		if created:
			services = validated_data.pop('services', None)
			
			room = validated_data.pop('room', None)
			
			pet = Pet(**validated_data, owner = owner)

			pet.save()

			if services:
				pet.services.set(services)

			if room:
				pet.room = room

			pet.save()
			
			return pet

		raise ValueError("El usuario que ha ingresado ya tiene una mascota asignada")