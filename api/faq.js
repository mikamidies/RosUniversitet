export default {
  async getFaq(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/knowledge_base/faq/list", {
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
