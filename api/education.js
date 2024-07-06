export default {
  async getEducation(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/about_us/education", {
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
