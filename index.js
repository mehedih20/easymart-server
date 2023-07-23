const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

// -----------------------------------
const app = express();
const port = process.env.PORT || 5000;

// ------------- Middlewares -----------------
app.use(cors());
app.use(express.json());

// ----------- Database Info -------------
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ds1tl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//--------------------------
async function run() {
  try {
    await client.connect();

    const database = client.db("EasyMart");
    const userCollection = database.collection("users");
    const productCollection = database.collection("products");
    const orderCollection = database.collection("orders");

    // ----------- Fetching -------------

    // Get all products
    app.get("/products", async (req, res) => {
      const result = await productCollection.find({}).toArray();
      res.json(result);
    });

    //------------ Creating --------------

    //Create a product
    app.post("/products", async (req, res) => {
      const product = req.body;
      const result = await productCollection.insertOne(product);
      res.json(result);
    });

    //------------ Updating ---------------

    app.put("/product/:id", async (req, res) => {
      const id = ObjectId(req.params.id);
      const { category, name, imgUrl, price, oldPrice, rating, deal } =
        req.body;
      const filter = { _id: id };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          category: category,
          name: name,
          imgUrl: imgUrl,
          price: price,
          oldPrice: oldPrice,
          rating: rating,
          deal: deal,
        },
      };
      const result = await productCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.json(result);
      console.log(result);
    });

    //------------ Deleting ---------------

    //Deleting a product
    app.delete("/products/:id", async (req, res) => {
      const productId = ObjectId(req.params.id);
      const query = { _id: productId };
      const result = await productCollection.deleteOne(query);
      res.json(result);
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Easy mart server running");
});

app.listen(port, () => {
  console.log("Server running at port ", port);
});
