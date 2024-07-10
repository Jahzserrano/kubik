from .models import Type
from rest_framework import serializers
from .models import Course, Grade, Review, Subject
from users.serializers import UserSerializer
from users.models import User

class SubjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subject
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        required=True,
        source='teacher_fk',
        write_only=False
    )
    serializers.PrimaryKeyRelatedField(
        queryset=Subject.objects.all(),
        required=True,
        source='subject_fk',
        write_only=False
    )


    class Meta:
        model = Course
        fields = '__all__'

class CourseListSerializer(serializers.ModelSerializer):
    teacher_fk = UserSerializer()
    subject_fk = SubjectSerializer()

    class Meta:
        model = Course
        fields = '__all__'

class GradesSerializer(serializers.ModelSerializer):
    student_fk = UserSerializer()
    course_fk = CourseListSerializer()

    class Meta:
        model = Grade
        fields = '__all__'

class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Type
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    # grade_fk = GradesSerializer()
    serializers.PrimaryKeyRelatedField(
        queryset=Grade.objects.all(),
        required=True,
        source='grade_fk',
        write_only=False
    )
    serializers.PrimaryKeyRelatedField(
        queryset=Type.objects.all(),
        required=True,
        source='type_fk',
        write_only=False
    )
    # type_fk = TypeSerializer()
    # grade_fk = GradesSerializer()

    class Meta:
        model = Review
        fields = '__all__'

class ReviewListSerializer(serializers.ModelSerializer):
    grade_fk = GradesSerializer()
    type_fk = TypeSerializer()

    class Meta:
        model = Review
        fields = '__all__'
