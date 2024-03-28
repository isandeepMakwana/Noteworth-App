from restaurants.models import Restaurant
from restaurants.serializers import resturantSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class RestaurantList(APIView):

    # Returns list of all Restaurants
    def get(self, request):
        restaurants = Restaurant.objects.all()
        serializer = resturantSerializer(restaurants, many=True)
        return Response(serializer.data)

    # Creates a new restaurants
    def post(self, request):

        serializer = resturantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RestaurantDetail(APIView):
    # Returns a particular Restaurant
    def get_object(self, pk):
        try:
            return Restaurant.objects.get(pk=pk)
        except Restaurant.DoesNotExist:
            raise Http404


    def get(self, request, pk):
        restaurants = self.get_object(pk)
        serializer = resturantSerializer(restaurants)
        return Response(serializer.data)

    # update a particular Restaurants
    def put(self, request, pk):
        restaurants = self.get_object(pk)
        serializer = resturantSerializer(restaurants, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Delete a particular Restaurants
    def delete(self, request, pk):
        restaurants = self.get_object(pk)
        restaurants.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
