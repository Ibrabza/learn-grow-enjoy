from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import CourseViewset,LessonViewset,QuestionViewset, AssignedCourseView, LessonQuestionsView


course_router = DefaultRouter()

course_router.register(r'new', CourseViewset)


lesson_router = DefaultRouter()
lesson_router.register(r'course', LessonViewset)

question_router = DefaultRouter()
question_router.register(r'question', QuestionViewset)

urlpatterns = [
    path('assigned_course_count/', AssignedCourseView.as_view()),
    path('lesson_questions/<int:lesson_id>', LessonQuestionsView.as_view())
]