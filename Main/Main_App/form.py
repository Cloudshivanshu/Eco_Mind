from django.forms import ModelForm
from .models import players

class Profile_form(ModelForm):
    class Meta:
        model = players
        fields = ['username','age','email']