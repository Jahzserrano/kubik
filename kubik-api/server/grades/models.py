from django.db import models
from users.models import User


class Subject(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        db_table = "subjects"

    def __str__(self):
        return self.name


class Course(models.Model):
    name = models.CharField( max_length=50)
    description = models.CharField(max_length=50)
    teacher_fk = models.ForeignKey(User, on_delete=models.CASCADE)
    subject_fk = models.ForeignKey(Subject, on_delete=models.CASCADE)

    class Meta:
        db_table = "courses"

    def __str__(self):
        return self.name


# Create your models here.
class Grade(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    grade = models.CharField(max_length=100, blank=False)
    course_fk =  models.ForeignKey(Course, on_delete=models.CASCADE)
    student_fk = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = "grades"

    def __str__(self):
        return f"{self.course_fk.name}: %{self.grade}"


class Type(models.Model):
    name = models.CharField(max_length=50)

    class Meta:
        db_table="types"

    def __str__(self):
        return self.name

class Review(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    grade = models.CharField(max_length=20, default='0')
    type_fk = models.ForeignKey(Type, on_delete=models.CASCADE, default='')
    grade_fk = models.ForeignKey(Grade, on_delete=models.CASCADE)

    class Meta:
        db_table = "reviews"

    def __str__(self):
        return self.name

