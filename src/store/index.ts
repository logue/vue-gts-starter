// Vuex Store
import Vue from 'vue';
import Vuex, { ActionTree, GetterTree, MutationTree, StoreOptions } from 'vuex';

Vue.use(Vuex);

// TODO: State Interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {}

// State
const state: RootState = {};

// Getters
const getters: GetterTree<RootState, RootState> = {};

// Mutation
const mutations: MutationTree<RootState> = {};

// Action
const actions: ActionTree<RootState, RootState> = {};

// VuexStore
const store: StoreOptions<RootState> = {
  strict: true,
  state,
  getters,
  mutations,
  actions,
  modules: {},
  plugins: [],
};

export default new Vuex.Store<RootState>(store);
