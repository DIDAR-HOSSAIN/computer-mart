
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.c4kfkmr.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    const productCollection = client.db("computer-mart").collection("products");

    if(req.method == "GET"){
        const product = await productCollection.find({}).toArray();
        res.send({message:"success", status: 200, data:product})
    }

    // if(req.method == "GET"){
    //     const productCategory = await productCollection.find({category: "Processor"}).toArray();
    //     res.send({message:"success", status: 200, data:productCategory} )
    //     console.log('backend product category',productCategory);
    // }

    // if(req.method == "POST"){
    //   const news = req.body;
    //   const result = await newsCollection.insertOne(news);
    //   res.json(result);

    // }



  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}



export default run;