import React, { Component } from 'react'
import TodoDataService from '../../../api/todo/TodoDataService'
import AuthenticationService from '../logging/AuthenticationService'
import moment from 'moment'

class ListTodos extends Component {

    state = {
        todos : [],
        message: null
    }


    componentDidMount(){
        this.refreshTodo();
        console.log(this.state)
    }

    refreshTodo = () => {
        let username = AuthenticationService.getLoggedInUserName();
        TodoDataService.retrieveAllTodos(username)
        .then( response =>
         this.setState({
             todos: response.data
         })
     )
    }
    addTodoClicked = () => {
        this.props.history.push(`/todos/-1`)

    }
    deleteTodoClicked = (id) => {
        let username = AuthenticationService.getLoggedInUserName();
       // console.log(id + " " + username)
       TodoDataService.deleteTodo(username, id)
       .then(
           response => {
               this.setState({message: `Delete of todo ${id} successful`});
               this.refreshTodo();

           }
       )
    }
    updateTodoClicked = (id) => {
        console.log(' update '  + id)
        this.props.history.push(`/todos/${id}`)
    }



    render() {
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                          <tr>
                              <th>Description</th>
                              <th>Is Completed</th>
                              <th>Target Date</th>
                              <th>Update</th>
                              <th>Delete</th>

                          </tr>
                    </thead>
                    <tbody>
                           {  
                             this.state.todos.map(todo =>  
                             <tr key={todo.id}>
                             <td>{todo.description}</td>
                             <td>{todo.done.toString()}</td>
                             <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                             <td><button className="btn btn-success" onClick={ () => this.updateTodoClicked(todo.id)}>Update</button></td>
                             <td><button className="btn btn-warning" onClick={ () => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                </div>
                </div>
            </div>
        )
    }
}

export default ListTodos