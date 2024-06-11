'use client';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3002;
const cors = require('cors');

app.use(cors());
app.use(express.json());


function home(req, res, next) {
res.send({message: 'Server is online'})
}

app.get('/', express.json, cors, home);
app.get('/', home);

app.use(notFound)

const uri = process.env.DB;

const { MongoClient, ServerApiVersion } = require('mongodb');
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use((error, req, res, next) => {
    console.log(error.message);
    res.status(500).send({message: error.message})
})

app.listen(PORT, () => {
    console.log('Server is running on' + PORT);
})

function notFound(req, res, next) {
    res.status(404).send({message: ' Not Found'})
}

