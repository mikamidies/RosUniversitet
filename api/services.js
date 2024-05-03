export default {
  async getServices(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/services/services/list", {
          //   ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};
