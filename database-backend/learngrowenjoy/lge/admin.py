from django.contrib import admin

# Register your models here.


from .models import Course , Lesson, Queistion , User

admin.site.register(Course)
admin.site.register(Lesson)
admin.site.register(Queistion)
admin.site.register(User)
