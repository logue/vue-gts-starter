/**
 * TypeScript Definition
 */
import { RootState } from '@/store';
import VueRouter from 'vue-router';
import { Store } from 'vuex';

declare module 'vue/types/vue' {
  interface ComponentCustomProperties {
    $store: Store<RootState>;
    $router: VueRouter;
  }
}
