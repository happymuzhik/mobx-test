import React from 'react';
import { render } from 'react-dom';

import TodoStore from '../Common/Stores/TodoStore/TodoListStore';
import TodoView from '../Common/Components/TodoView/TodoView';

render(
	<div>
		<TodoView store={TodoStore} />
	</div>,
	document.getElementById('root')
);