export default {
  async getCertificate(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/about_us/certificates", {
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