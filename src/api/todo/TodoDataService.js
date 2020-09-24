import axios from 'axios';

class TodoDataService {

    retrieveAllTodos(name) {
        return axios.get(`http://localhost:8080/users/${name}/todos`);
         //console.log('execute service')
     }
     
    retrieveTodo(name, id) {
        return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
         //console.log('execute service')
     }

     deleteTodo(name, id) {
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
         //console.log('execute service')
     }
     updateTodo(name, id, todo) {
        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
         //console.log('execute service')
     }
     createTodo(name, todo) {
        return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
         //console.log('execute service')
     }

     //http://localhost:8080/users/noble/todos/1
}

export default new TodoDataService()