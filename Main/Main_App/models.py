from django.db import models

# Create your models here.
class players(models.Model):
    username = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.CharField(max_length=100,unique=True,null = True)

    def __str__(self):
        return self.username