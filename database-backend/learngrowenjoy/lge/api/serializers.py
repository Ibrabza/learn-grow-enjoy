from rest_framework.serializers import ModelSerializer
from ..models import Course,Lesson,Queistion


class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class LessonSerializer(ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'

class QuestionSerializer(ModelSerializer):
    class Meta:
        model = Queistion
        fields = '__all__'

        