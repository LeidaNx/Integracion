from django.db import models

# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    pendiente =models.BooleanField(default=True)
    preparando =models.BooleanField(default=False)
    despachado =models.BooleanField(default=False)
    entregado =models.BooleanField(default=False)


    def __str__(self):
        return self.title