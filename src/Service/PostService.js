import httpAxios from '../httpAxios'
function getAll() {
    return httpAxios.get('post/index');
}
function getById(id) {
    return httpAxios.get('/post/show/' + id);
}
function create(post) {
    return httpAxios.post('/post/store', post)
}
function update(id, post) {
    return httpAxios.post('/post/update/' + id, post);
}
function remove(id) {
    return httpAxios.delete('/post/destroy/' + id);
}
function getBySlug(slug) {
    return httpAxios.get('/post/show/' + slug);

}
function getTopicByParentId(parent_id) {
    return httpAxios.get(`topic_list/${parent_id}`);

}

const postservice = {
    getAll: getAll,
    getById: getById,
    create: create,
    update: update,
    remove: remove
}
export default postservice;