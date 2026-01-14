from django.shortcuts import render,HttpResponse

# Create your views here.
def index(request):
    return render(request,'index.html')
def start(request):
    return render(request,'levels.html')
def beginner(request):
    return render(request,'beginner.html')
def game(request):
    return render(request,'game.html')
def shop(request):
    return render(request,'marketPlace.html')
def article(request):
    return render(request,'ecoArticle.html')
def contribute(request):
    return render(request,'contribute.html')