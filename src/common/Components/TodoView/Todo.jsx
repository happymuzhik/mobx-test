import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
export default class Todo extends Component{
	toggleComplete(todo){
		todo.complete = !todo.complete;
	}
	render(){
		const { value, complete } = this.props.todo;
		return	<div>
					<input type="checkbox" checked={this.props.todo.complete} onChange={this.toggleComplete.bind(this, this.props.todo)} />
					<span>{value}</span>
				</div>
	}
}