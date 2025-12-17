from django.shortcuts import render,HttpResponse,redirect
from .form import Profile_form
from .models import players
# Create your views here.
def index(request):
    return render(request,'index.html')
def start(request):
    return render(request,'levels.html')
def beginner(request):
    return render(request,'beginner.html')
def game(request):
    return render(request,'game.html')
def create_profile(request):
    if request.method == "POST":
        form = Profile_form(request.POST)
        if form.is_valid():
            form.save()
            return redirect("show_profile")
    else:
        form = Profile_form()

    return render(request,"create_profile.html",{"form":form})
def show_profile(request):
    profiles = players.objects.all()
    return render(request, "show_profile.html", {"profiles": profiles})
