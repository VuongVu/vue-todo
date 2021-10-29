import { InjectionKey } from 'vue';
import { Store, createStore, useStore as useBaseStore } from 'vuex';

import { RootState } from '@/store/models';
import todoStore from '@/store/todoStore';

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
    modules: {
        todos: todoStore,
    },
});

export const useStore = () => useBaseStore(key);
