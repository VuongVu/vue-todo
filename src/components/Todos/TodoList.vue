<script setup lang="ts">
    import { ref } from 'vue';
    import { CheckIcon, XIcon } from '@heroicons/vue/solid';

    import Todo from './Todo.vue';
    import AddTodo from './AddTodo.vue';

    const todoList = ref<
        {
            id: number;
            content: string;
            completed: boolean;
        }[]
    >([
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
    ]);

    const handleAddTodo = (todo: any) => {
        todoList.value.push(todo);
    };

    const handleCompleteTodo = (id: number) => {
        const todo = todoList.value.find((item) => item.id === id);
        if (!todo) return;

        todo.completed = true;
    };

    const handleDeleteTodo = (id: number) => {
        const todoIndex = todoList.value.findIndex((item) => item.id === id);
        if (todoIndex === -1) return;

        todoList.value.splice(todoIndex, 1);
    };
</script>

<template>
    <div class="pt-20">
        <div class="mb-5 text-lg text-center font-semibold">Todo List</div>

        <div class="grid grid-flow-row gap-y-5 m-auto w-1/2 p-10 shadow-xl rounded-xl bg-white">
            <add-todo @add-todo="handleAddTodo" />

            <div>
                <ul class="grid grid-flow-row gap-y-2">
                    <li v-for="todo in todoList" :key="todo.id" class="flex space-x-2">
                        <todo
                            :todo="todo"
                            @complete-todo="handleCompleteTodo"
                            @delete-todo="handleDeleteTodo" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
