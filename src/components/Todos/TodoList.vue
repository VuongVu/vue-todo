<script setup lang="ts">
    import useTodo from '@/composables/todo/useTodo';

    import Todo from './Todo.vue';
    import AddTodo from './AddTodo.vue';

    const { todos } = useTodo();
</script>

<template>
    <div class="pt-20">
        <div class="mb-5 text-lg text-center font-semibold">Todo List</div>

        <div class="grid grid-flow-row gap-y-5 m-auto w-1/2 p-10 shadow-xl rounded-xl bg-white">
            <add-todo />

            <div>
                <ul class="grid grid-flow-row gap-y-2">
                    <li v-for="todo in todos" :key="todo.id" class="flex space-x-2">
                        <todo :todo="todo" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
