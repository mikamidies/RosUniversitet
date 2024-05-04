export default {
  async getStudents(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/university/students", {
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
