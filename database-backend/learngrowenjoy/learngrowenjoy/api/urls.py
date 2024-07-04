from rest_framework.routers import DefaultRouter
from lge.api.urls import course_router,lesson_router,question_router
from django.urls import path, include

router = DefaultRouter()
router.registry.extend(course_router.registry)
router.registry.extend(lesson_router.registry)
router.registry.extend(question_router.registry)
urlpatterns = [
    path('', include(router.urls))
]