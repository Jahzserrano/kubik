from django.contrib.auth.models import AbstractUser
from django.db import models

from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token


# class TypeUser(models.Model):
#     name = models.CharField(max_length=50)

#     class Meta:
#         db_table="user_types"

    # @classmethod
    # def get_default_pk(cls):
    #     type_user, created = cls.objects.get_or_create(
    #         name="superadmin"
    #     )
    #     return type_user.id


class User(AbstractUser):
    type = models.CharField(max_length=50, default="superadmin")

    class Meta:
        db_table = 'users'

    def __str__(self):
        return self.username


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
