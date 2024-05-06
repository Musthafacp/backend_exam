const express = require("express");
const app = express();
const port = 3000;
const axios = require("axios");
const cors = require("cors");

app.use(cors());
app.use(express.json())

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (response) {
      console.log(response.data);
      res.json(response.data)
    } else {
      console.log("Error while getting the data");
    }
  } catch (err) {
    console.log("Error while fetching the Data", err);
  }
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
