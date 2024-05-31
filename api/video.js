export default {
  async getVideo(axios) {
    try {
      let res;

      if (axios) {
        res = await axios.get("/about_us/main_info/", {
        });

        return res.data;
      }
      return res;
    } catch (e) {
      console.log(e);
    }
  },
}