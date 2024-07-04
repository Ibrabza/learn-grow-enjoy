from django.urls import path, include
from . import views

# urlpatterns = [

# ]

urlpatterns = [
    path('lge/courses', views.get_data, name='get_data'),
    path('api/', include('lge.api.urls'))

    # Other URL patterns
]