from rest_framework import serializers
from .models import Restaurant


class resturantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
