package com.react_java.rest.webservices.resstfulwebservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedServices {
	
	private static List<Todo> todos = new ArrayList();
	private static int idCounter = 0;
	
	//Initialised Data
	static {
		todos.add(new Todo(++idCounter, "noble", "Learn React", new Date(), false));
		todos.add(new Todo(++idCounter, "noble", "Master webservice", new Date(), false));
		todos.add(new Todo(++idCounter, "noble", "Master Redux", new Date(), false));
		todos.add(new Todo(++idCounter, "noble", "Master webservice", new Date(), false));
		todos.add(new Todo(++idCounter, "noble", "Learn Framework", new Date(), false));

	}
	
	//return todos
	public List<Todo> findAll(){
		return todos;
	}
	//save method
	public Todo save(Todo todo) {
		if(todo.getId() == -1 || todo.getId() == 0)  {
			
			todo.setId(++idCounter);
			todos.add(todo);
			
		} else {
			//Delete todo with the specific ID
			deleteById(todo.getId());
			//Then add new todo
			todos.add(todo);
		}
		// return updated todo
		return todo;
			
	}
	
	public Todo deleteById(long id) {
		Todo todo = finById(id);
		
		if(todo == null) return null;
		
		//if successfull remove
		if(todos.remove(todo)) {
		return todo;
		}
		
		return null;
	}

	public Todo finById(long id) {
		// TODO Auto-generated method stub
		for(Todo todo:todos) {
			if(todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}

}
