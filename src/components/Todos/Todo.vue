<script setup lang="ts">
    import { defineProps, defineEmits, toRefs, computed } from 'vue';
    import { CheckIcon, XIcon } from '@heroicons/vue/solid';

    const props = defineProps({
        todo: Object,
    });

    const todo = toRefs(props.todo);

    const emit = defineEmits(['delete-todo', 'complete-todo']);

    const isCompleted = computed(() => todo.completed.value);

    const handleDeleteTodo = (id: number) => {
        emit('delete-todo', id);
    };

    const handleCompleteTodo = (id: number) => {
        emit('complete-todo', id);
    };
</script>

<template>
    <span :class="{ 'line-through italic': isCompleted }">
        {{ todo.content.value }}
    </span>
    <CheckIcon
        :class="['h-5 text-green-500 hover:cursor-pointer', isCompleted && 'hidden']"
        @click="handleCompleteTodo(todo.id.value)" />
    <XIcon class="h-5 text-red-500 hover:cursor-pointer" @click="handleDeleteTodo(todo.id.value)" />
</template>
