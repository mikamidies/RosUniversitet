export default {
  async getUnivers(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/university/university/list", {
          ...params,
        });

        return res.data;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getUniver(id, axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/university/university/${id}`, {
          ...params,
        });
      }
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
