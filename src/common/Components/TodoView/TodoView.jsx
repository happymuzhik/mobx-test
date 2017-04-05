import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Todo from './Todo';

@observer
export default class TodoList extends Component{
	createNew(e){
		if(e.keyCode === 13){
			this.props.store.createTodo(e.target.value);
			e.target.value = '';
		}
	}
	filter(e){
		this.props.store.filter = e.target.value;
	}
	clearComplete(){
		this.props.store.clearComplete();
	}
	render(){
		const { todos, filteredTodos, filter } = this.props.store;
		return	<div>
					<h1>Todo List</h1>
					<div>
						<input type="text" value={filter} placeholder="filter" onChange={::this.filter} />
					</div>
					<div>
						<input type="text" placeholder="add new" onKeyDown={::this.createNew} />
					</div>
					<div>
						{
							(filteredTodos&&filteredTodos.length>0)?
								filteredTodos.map((todo, index) => <Todo key={index} todo={todo} />)
							:false
						}
					</div>
					<div>
						<button onClick={::this.clearComplete}>Clear Completed Todos</button>
					</div>
				</div>
	}
}