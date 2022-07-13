const editly = require("editly");
const axios = require("axios");
async function createVideo() {
  try {
    const { data } = await axios({
      method: "GET",
      url: "https://dummyjson.com/products",
    });
    const datas = data.products.slice(0, 5);
    // console.log(datas);
    const videos = datas.map((el) => {
      return {
        duration: 3,
        layers: [
          { type: "image", path: el.thumbnail },
          { type: "news-title", text: el.title },
          {
            type: "subtitle",
            text: el.description,
            backgroundColor: "rgba(0,0,0,0.5)",
          },
        ],
      };
    });
    await editly({
      width: 900,
      height: 1600,
      outPath: "./Output.mp4",
      defaults: {},
      allowRemoteRequests: true,
      clips: videos,
    });
  } catch (err) {
    console.log(err);
  }
}

createVideo();
