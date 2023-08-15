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
    // Get single products
    app.get("/products/:id", async (req, res) => {
      const id = ObjectId(req.params.id);
      const query = { _id: id };
      const result = await productCollection.findOne(query);
      res.json(result);
    });

    // Get all users
    app.get("/users", async (req, res) => {
      const result = await userCollection.find({}).toArray();
      res.json(result);
    });

    // Get all orders
    app.get("/orders", async (req, res) => {
      const result = await orderCollection.find({}).toArray();
      res.json(result);
    });

    // Get orders of a specific user
    app.get("/orders/:email", async (req, res) => {
      const userEmail = req.params.email;
      const query = { email: userEmail };
      const result = await orderCollection.find(query).toArray();
      res.json(result);
    });

    // Get single user
    app.get("/users/:email", async (req, res) => {
      const userEmail = req.params.email;
      const query = { email: userEmail };
      const result = await userCollection.findOne(query);
      res.json(result);
    });

    //------------ Creating --------------

    //Create a product
    app.post("/products", async (req, res) => {
      const product = req.body;
      const result = await productCollection.insertOne(product);
      res.json(result);
    });

    //Create an order
    app.post("/orders", async (req, res) => {
      const order = req.body;
      const result = await orderCollection.insertOne(order);
      res.json(result);
    });

    //Create an user
    app.put("/users", async (req, res) => {
      const newUser = req.body;
      const filter = { email: newUser.email };
      const options = { upsert: true };
      const updateDoc = {
        $set: newUser,
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.json(result);
    });

    //------------ Updating ---------------

    // Updating product info
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

    //Making admin
    app.put("/user/makeAdmin/:id", async (req, res) => {
      const id = ObjectId(req.params.id);
      const filter = { _id: id };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          role: "admin",
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.json(result);
    });

    //Removing admin
    app.put("/user/removeAdmin/:id", async (req, res) => {
      const id = ObjectId(req.params.id);
      const filter = { _id: id };
      const options = { upsert: true };
      const updateDoc = {
        $unset: {
          role: 1,
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.json(result);
    });

    //Updating cart
    app.put("/user/cart/:email", async (req, res) => {
      const userEmail = req.params.email;
      const filter = { email: userEmail };
      const newCartItem = req.body;
      const options = { upsert: true };
      const updateDoc = {
        $push: {
          cart: newCartItem,
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.json(result);
    });

    //Removing item from cart
    app.put("/user/cart/removeItem/:email", async (req, res) => {
      const userEmail = req.params.email;
      const filter = { email: userEmail };
      const pId = req.body.itemId;
      const options = { upsert: true };
      const updateDoc = {
        $pull: {
          cart: {
            itemId: pId,
          },
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.json(result);
    });

    //Removing cart after placing order
    app.put("/cart/orderConfirmed/:email", async (req, res) => {
      const userEmail = req.params.email;
      const filter = { email: userEmail };
      const options = { upsert: true };
      const updateDoc = {
        $unset: {
          cart: 1,
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.json(result);
    });

    //Updating order status
    app.put("/orders/:id", async (req, res) => {
      const orderId = ObjectId(req.params.id);
      const filter = { _id: orderId };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          status: "shipped",
        },
      };
      const result = await orderCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.json(result);
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
