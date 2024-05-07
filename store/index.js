export const state = () => ({
  translations: {},
  siteInfo: {}
});

export const mutations = {
  getTranslations(state, payload) {
    state.translations = payload;
  },
  getSiteInfo(state,payload) {
    state.siteInfo = payload;
  }
};


