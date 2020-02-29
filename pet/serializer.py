from django.contrib.auth import get_user_model

from rest_framework import serializers

from .models import Pet

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