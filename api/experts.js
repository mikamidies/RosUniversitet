export default {
  async getExperts(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/university/experts", {
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
