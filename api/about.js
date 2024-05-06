export default {
  async getFaq(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/about_us/steps", {
          ...params,
        });

        return res.data.results;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  async getMainInfo(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/about_us/main_info", {
          ...params,
        });
console.log(res);
        return res.data;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },
  async getRoadmap(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/about_us/roadmap", {
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
