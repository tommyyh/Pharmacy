from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

def home(request):
  success_msg = request.session['success'] if 'success' in request.session else ''
  
  context = {
    'success': success_msg
  }

  return render(request, 'home/index.html', context)

@api_view(['GET'])
def remove_message(request):
  request.session['success'] = ''

  return Response({ 'status': 200 })