from django.db import models
# Create your models here.
from django.urls import reverse # Used in get_absolute_url() to get URL for specified ID
from django.db.models import UniqueConstraint # Constrains fields to unique values
from django.db.models.functions import Lower # Returns lower cased value of field

import uuid

class Course(models.Model):
    id = models.IntegerField(primary_key=True,default=uuid.uuid4)
    name = models.TextField( help_text="Enter name for the course ")
    # lessons = models.ForeignKey('lesson',on_delete=models.RESTRICT, null=False)

    def __str__(self) -> str:
        return self.name
    
    def get_absolute_url(self):
        return reverse('course-detail', args=[str(self.id)])
    
class Lesson(models.Model):
    id = models.IntegerField(primary_key=True,null=False, default=uuid.uuid4)
    assignedCourse = models.ForeignKey('Course', on_delete=models.RESTRICT,null=False)
    video = models.TextField(default="http://youtube.com",null=False)

    class Meta:
        ordering = ['id']
    
    def get_absolute_url(self):
        return reverse('lesson-detail', args=[str(self.id)])
    
    def __str__(self):
        return f'{self.id} {self.assignedCourse}'
    

class Queistion(models.Model):
    id = models.IntegerField(primary_key=True)
    queistion = models.TextField(help_text="Enter a question")
    option1 = models.CharField(null=False)
    option2 = models.CharField(null=False)
    option3 = models.CharField(null=False)
    rightAnswear = models.CharField(null=False)
    assignedToLesson = models.ForeignKey(Lesson,on_delete=models.RESTRICT, null=False)

    class Meta:
        ordering = ['id']
    

    def get_absolute_url(self):
        return reverse('queistion-detail', args=[str(self.id)])

    def __str__(self):
        return self.queistion
    
class User(models.Model):
    id = models.IntegerField(primary_key=True,null=False, default=uuid.uuid4)
    assignedToCourse = models.ForeignKey(Course,null=True,blank=True,on_delete=models.SET_NULL)
    username = models.CharField(null=False, unique=True)

    def get_absolute_url(self):
        return reverse('queistion-detail', args=[str(self.id)])

    def __str__(self):
        return self.username