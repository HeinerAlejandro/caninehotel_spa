from django.db import models

# Create your models here.

class Service(models.Model):

	description = models.CharField(max_length = 25, primary_key = True)
	cost = models.FloatField()

	def __str__(self):

		return str(self.description)

