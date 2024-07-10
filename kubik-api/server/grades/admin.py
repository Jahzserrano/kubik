from django.contrib import admin
from .models import Course, Grade, Review, Subject, Type
# Register your models here.

admin.site.register(Grade)
admin.site.register(Review)
admin.site.register(Type)
admin.site.register(Course)
admin.site.register(Subject)