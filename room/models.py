from django.db import models

# Create your models here.

class Room(models.Model):

	number = models.IntegerField(primary_key = True)
	cost = models.FloatField()

	def __str__(self):
		return str(self.number)