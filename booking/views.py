from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Date

def booking(request):
	return render(request, 'booking/booking.html', {})


@api_view(['POST'])
def new_date(request):
	date_value = request.data['date']
	time_models = []
	date = Date.objects.filter(date_field=date_value)
	time = [
		'9:00', '9:15', '9:30', '9:45',
		'10:00', '10:15', '10:30', '10:45',
		'11:00', '11:15', '11:30', '11:45',
		'12:00', '12:15', '12:30', '12:45',
		'13:00', '13:15', '13:30', '13:45',
		'14:00', '14:15', '14:30', '14:45',
		'15:00', '15:15', '15:30', '15:45', '16:00'
	]

	if not date:
		return Response({ 'times_taken': time })
	else:
		# Take all associated models and put them into a list
		for x in range(len(date)):
			time_models.append(date[x].date.all()[x].time)

		# Make a list containing only the values
		times_taken = [x for x in time if x not in time_models]

		return Response({ 'times_taken': times_taken })
