export const state = () => ({
  translations: {},
});

export const mutations = {
  getTranslations(state, payload) {
    state.translations = payload;
  },
};


