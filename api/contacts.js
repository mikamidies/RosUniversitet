export default {
  async getContacts(axios, params) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/about_us/contacts/", {
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
