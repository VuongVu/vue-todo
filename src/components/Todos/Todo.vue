<script setup lang="ts">
    import { toRefs } from 'vue';
    import { CheckIcon, XIcon } from '@heroicons/vue/solid';

    import useTodo from '@/composables/todo/useTodo';

    const { completeTodo, deleteTodo, hasCompleted } = useTodo();

    const props = defineProps<{
        todo: {
            id: number;
            content: string;
            completed: boolean;
        };
    }>();

    const todo = toRefs(props.todo);

    const handleDeleteTodo = (id: number) => {
        deleteTodo(id);
    };

    const handleCompleteTodo = (id: number) => {
        completeTodo(id);
    };
</script>

<template>
    <span :class="{ 'line-through italic': hasCompleted(todo.id.value) }">
        {{ todo.content.value }}
    </span>
    <CheckIcon
        :class="[
            'h-5 text-green-500 hover:cursor-pointer',
            hasCompleted(todo.id.value) && 'hidden',
        ]"
        @click="handleCompleteTodo(todo.id.value)" />
    <XIcon class="h-5 text-red-500 hover:cursor-pointer" @click="handleDeleteTodo(todo.id.value)" />
</template>
