import { ActionContext, Module } from 'vuex';

import { TodoState } from '@/store/models/todo';
import { RootState } from '@/store/models';

const state = (): TodoState[] => [
    {
        id: 1,
        content: 'Learn Vue',
        completed: true,
    },
    {
        id: 2,
        content: 'Build Vue Project',
        completed: false,
    },
    {
        id: 3,
        content: 'Find Vue Job',
        completed: false,
    },
];

const getters = {
    getTodoComplete(state: TodoState[]) {
        return function (id: number) {
            return state.find((todo) => todo.id === id)?.completed ?? false;
        };
    },
};

const mutations = {
    addTodo(state: TodoState[], payload: TodoState): void {
        state.push(payload);
    },
    completeTodo(state: TodoState[], payload: { id: number }): void {
        const selectTodo = state.find((todo) => todo.id === payload.id);

        if (!selectTodo) return;

        state.splice(state.indexOf(selectTodo), 1, {
            ...selectTodo,
            completed: true,
        });
    },
    deleteTodo(state: TodoState[], payload: { id: number }): void {
        state.splice(
            state.findIndex((todo) => todo.id === payload.id),
            1,
        );
    },
};

const actions = {
    addTodo({ commit }: ActionContext<TodoState[], RootState>, payload: TodoState): void {
        commit('addTodo', payload);
    },
    completeTodo({ commit }: ActionContext<TodoState[], RootState>, payload: { id: number }): void {
        commit('completeTodo', payload);
    },
    deleteTodo({ commit }: ActionContext<TodoState[], RootState>, payload: { id: number }): void {
        commit('deleteTodo', payload);
    },
};

export type TodoGetters = typeof getters;

export type TodoMutations = typeof mutations;

export type TodoActions = typeof actions;

const TodoModule: Module<TodoState[], RootState> = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};

export default TodoModule;
