from django.db import models
from django.contrib.auth.models import AbstractUser

from service.models import Service
from room.models import Room

# Create your models here.

GENDERS = (
	('h', 'HEMBRA'),
	('m', 'MACHO')
)

class Owner(AbstractUser):

	username = models.CharField(max_length = 20, blank = True, null = True, unique = True)
	dni = models.CharField(max_length = 10, primary_key = True)
	contact = models.CharField(max_length = 11, blank = True, null = True	)

class Pet(models.Model):

	name = models.CharField(max_length = 20)
	age = models.IntegerField()
	race = models.CharField(max_length = 20)
	gender = models.CharField(max_length = 6, choices = GENDERS)
	owner = models.ForeignKey('Owner', on_delete = models.CASCADE)

	services = models.ManyToManyField(Service, blank = True)
	room = models.OneToOneField(Room, blank = True, null = True, on_delete = models.CASCADE)