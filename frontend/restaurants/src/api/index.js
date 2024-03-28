import base from './base'

const getRestaurant = () =>
    base({
        url: `/restaurants/`,
        method: 'get',
    });

const getOneRestaurant = (id) =>
    base({
        url: `/restaurants/${id}/`,
        method: 'get',
    });

const deleteRestaurant = (id) =>
    base({
        url: `/restaurants/${id}/`,
        method: 'delete',
    });
const editRestaurant = (data) =>
    base({
        url: `/restaurants/${data.id}/`,
        method: 'put',
        data:data
    });
const createRestaurant = data =>
    base({
        url: '/restaurants/',
        method: 'post',
        data: data,
    });


export default {
    getRestaurant,
    getOneRestaurant,
    createRestaurant,
    editRestaurant,
    deleteRestaurant
};

