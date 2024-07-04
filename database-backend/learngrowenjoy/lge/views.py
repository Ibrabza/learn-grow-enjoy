from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .models import Course,Lesson,Queistion
from django.core.serializers import serialize

def get_data(request):
    data = list(Course.objects.all().values())  # Query your model and convert to list of dictionaries
    return JsonResponse(data, safe=False)