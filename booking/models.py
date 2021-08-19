from django.db import models

class Date(models.Model):
	date_field = models.DateField()

class Time(models.Model):
	time = models.CharField(max_length=100)
	date = models.ForeignKey(Date, related_name="date", on_delete=models.CASCADE)
