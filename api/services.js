export default {
  async getServices(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/services/services/list", {
          ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
