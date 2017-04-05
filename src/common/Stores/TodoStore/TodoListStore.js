import { observable, computed, reaction } from 'mobx';
import Todo from './TodoStore';

class TodoStore {
	@observable todos = [];
	@observable filter = '';
	@computed get filteredTodos(){
		return this.todos.filter( todo => (this.filter.length==0 || todo.value.toLowerCase().indexOf(this.filter.toLowerCase())>-1) )
	}

	createTodo(value){
		this.todos.push(new Todo(value))
	}

	clearComplete(){
		const incompleteTodos = this.todos.filter( todo => !todo.complete );
		this.todos.replace(incompleteTodos);
	}
};   

const todoStore = new TodoStore();

export default todoStore;