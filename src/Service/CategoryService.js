import httpAxios from '../httpAxios'
function getAll() {
    return httpAxios.get('category/index');
}
function getById(id) {
    return httpAxios.get('/category/show/' + id);
}
function getBySlug(slug) {
    return httpAxios.get('/category/show/' + slug);
}

function create(category) {
    return httpAxios.post('/category/store', category)
}
function update(id, category) {
    return httpAxios.post('/category/update/' + id, category);
}
function getCategoryByParentId(parent_id) {
    return httpAxios.get('category/category_list/'+parent_id);

}
function remove(id) {
    return httpAxios.delete('/category/destroy/' + id);
}

const categoryservice = {
    getCategoryByParentId: getCategoryByParentId,
    getAll: getAll,
    getById: getById,
    getBySlug: getBySlug,
    create: create,
    update: update,
    remove: remove
}
export default categoryservice;