import httpAxios from '../httpAxios'
function getAll() {
    return httpAxios.get('orderdetail/index');
}
function getById(id) {
    return httpAxios.get('/orderdetails/show/' + id);
}
function create(data) {
    return httpAxios.post('/orderdetails/store', data)
}
function update(data, id) {
    return httpAxios.patch('/orderdetails/update' + id, data);
}
function remove(id) {
    return httpAxios.delete('/orderdetails/destroy' + id);
}

const orderdetailservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default orderdetailservice;