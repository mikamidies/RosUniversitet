export default {
  async getBases(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/knowledge_base/sections/list", {
          //   ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getBase(id, axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/knowledge_base/sections/${id}`, {
          ...params,
        });
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
