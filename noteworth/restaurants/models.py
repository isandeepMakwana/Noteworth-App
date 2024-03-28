from django.db import models
# Create your models here.

class Restaurant(models.Model):

    name=models.CharField(max_length=120)
    foodtype = models.CharField(max_length=120)
    address = models.CharField(max_length=120)
    rating = models.IntegerField()
    contact = models.CharField(max_length=120)
    speciality = models.CharField(max_length=120)

    def __str__(self):
        return self.name