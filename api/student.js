export default {
  async getStudent(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/about_us/applicationGuideLine", {
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
