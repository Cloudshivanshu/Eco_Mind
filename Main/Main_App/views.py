from django.shortcuts import render,HttpResponse

# Create your views here.
def index(request):
    return render(request,'index1.html')
def start(request):
    return render(request,'ecoconnect.html')
def beginner(request):
    return render(request,'beginner.html')