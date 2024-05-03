export default {
  async getFaq(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/about_us/steps", {
          //   ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },

  async getRoadmap(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/about_us/roadmap", {
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
