from django.shortcuts import render

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Service

from django.db.models import Sum

from .serializer import ServiceSerializer

# Create your views here.

class ServiceViewSet(viewsets.ModelViewSet):

	serializer_class = ServiceSerializer
	queryset = Service.objects.all()

	lookup_field = 'description'
	lookup_url_kwarg  = 'description'

	@action(methods = ['get'], detail = True, url_path = 'get-budget')
	def get_budget(self, request, description):

		service = Service.objects.filter(description = description)
		
		service_serializer_instance = ServiceSerializer(service, many = True)

		return Response(service_serializer_instance.data[0].get('cost'), status = status.HTTP_200_OK)
		
	@action(methods = ['get'], detail =  False, url_path = 'get-budgets')
	def get_budgets(self, request):

		services_descriptor = request.query_params.get('services')
		raise Exception(type(services_descriptor))
		service = Service.objects.filter(description__in = services_descriptor).aggregate(tota = Sum('cost'))

		