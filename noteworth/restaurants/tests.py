from django.urls import include, path, reverse
from rest_framework import status
from rest_framework.test import APITestCase


class RetaurantTests(APITestCase):

    def setUp(self) -> None:
        self.data = {'name': 'Night star', 'foodtype': 'Amercian',
                     'address': 'Address', 'contact': '123456789',
                     'rating': 3, 'speciality': 'Pizza'}
        self.url = '/api/restaurants/'
        response = self.create_data(self.url, self.data)
        self.update_url = '/api/restaurants/'+str(response.data['id'])+"/"

    def create_data(self, url, data):
        response = self.client.post(url, data, format='json')
        return response

    def test_get_resturants(self):
        response = self.client.get(self.url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_resturants(self):
        response = self.create_data(self.url, self.data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_update_resturants(self):
        self.data.update({'rating': 2})
        response = self.client.put(self.update_url, self.data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete_resturants(self):
        response = self.client.delete(self.update_url, format='json')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
