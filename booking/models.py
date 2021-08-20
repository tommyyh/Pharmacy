from django.db import models

class User(models.Model):
	name = models.CharField(max_length=255)
	email = models.CharField(max_length=255)
	phone = models.CharField(max_length=255)
	message = models.TextField()
	date = models.DateField()
	has_texted = models.BooleanField(default=False)
	has_read = models.BooleanField(default=False)

	def __str__(self):
		return f'{self.name}: {self.date}'

class Time(models.Model):
	time = models.CharField(max_length=100)
	user = models.ForeignKey(User, related_name="user", on_delete=models.CASCADE)

	def __str__(self):
		return f'{self.user.date}: {self.time}'
