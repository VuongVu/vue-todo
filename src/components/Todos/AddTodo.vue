<script setup lang="ts">
    import { ref, defineEmits } from 'vue';

    const todo = ref<string>('');

    const emit = defineEmits(['addTodo']);

    const handleAddTodo = () => {
        if (!todo.value) {
            alert('Todo is empty!');
            return;
        }

        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            content: todo.value,
            completed: false,
        };

        emit('addTodo', newTodo);

        todo.value = '';
    };
</script>

<template>
    <div>
        <input
            v-model="todo"
            class="w-96 h-10 mr-4 p-2 rounded-lg border-2 border-blue-400"
            type="text"
            placeholder="Add Todo" />
        <button
            @click="handleAddTodo"
            class="
                bg-green-500
                px-4
                py-2
                rounded-md
                text-white
                hover:bg-blue-500
                focus:ring-2 focus:ring-blue-300
            ">
            Add
        </button>
    </div>
</template>
