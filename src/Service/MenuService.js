import httpAxios from '../httpAxios'
//backend
function getAll() {
    return httpAxios.get('menu/index');
}
function getById(id) {
    return httpAxios.get('/menu/show/' + id);
}
function create(menu) {
    return httpAxios.post('/menu/store', menu)
}
function update(id, menu) {
    return httpAxios.post('/menu/update/' + id, menu);
}
function remove(id) {
    return httpAxios.delete('/menu/destroy/' + id);
}
//frontend
function getByParentId(position, parent_id) {
    return httpAxios.get(`menu/menu_list/${position}/${parent_id}`);

}
const menuservice = {
    getByParentId: getByParentId,
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default menuservice;



