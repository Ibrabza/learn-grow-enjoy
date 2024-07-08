from django.views import View
from django.http import JsonResponse
from rest_framework.viewsets import ModelViewSet
from ..models import Course,Lesson,Queistion, User
from .serializers import CourseSerializer, LessonSerializer,QuestionSerializer

class CourseViewset(ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class LessonViewset(ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer

class QuestionViewset(ModelViewSet):
    queryset = Queistion.objects.all()
    serializer_class = QuestionSerializer

class AssignedCourseView(View):
    def get(self, request):
        course = User.objects.get(id=1).assignedToCourse
        lessons = Lesson.objects.filter(assignedCourse=course)

        data = ({'count': lessons.count()})
        return JsonResponse(data, safe=False)
    
class LessonQuestionsView(View):
    def get(self, request, lesson_id):
        questions = Queistion.objects.filter(assignedToLesson=lesson_id)

        data = [{
            "id": question.id,
            "question": question.queistion,
            "option1": question.option1,
            "option2": question.option2,
            "option3": question.option3,
            "rightAnswear" : question.rightAnswear,
            # "assignedToLesson" : question.assignedToLesson
        } for question in questions]
        return JsonResponse(data, safe=False)