import { computed } from 'vue';

import { useStore } from '@/store';
import { TodoState } from '@/store/models/todo';

export default () => {
    const store = useStore();

    const addTodo = (newTodo: TodoState) => {
        store.dispatch('todos/addTodo', newTodo);
    };

    const completeTodo = (id: number) => {
        store.dispatch('todos/completeTodo', { id });
    };

    const deleteTodo = (id: number) => {
        store.dispatch('todos/deleteTodo', { id });
    };

    const hasCompleted = (id: number) => {
        return store.getters['todos/getTodoComplete'](id);
    };

    return {
        todos: computed(() => store.state.todos),
        addTodo,
        completeTodo,
        deleteTodo,
        hasCompleted,
    };
};
