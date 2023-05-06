const express = require('express');
const app = express();
const env = require('dotenv');
const axios = require('axios');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CryptoPrice = require("./models/crypto")
const CryptoRoutes = require("./routes/crypto")
env.config();

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@cluster0.xuuypzv.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log("Database connected");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));   
app.use("/api", CryptoRoutes)
axios.get('https://api.wazirx.com/api/v2/tickers')
  .then(response => {
    const data = response.data;

    // Extract the top 10 results
    const top10 = Object.values(data).slice(0, 10);

    // Extract the relevant fields and create an array of objects
    const cryptoPrices = top10.map(price => ({
      name: price.name,
      last: price.last,
      buy: price.buy,
      sell: price.sell,
      volume: price.volume,
      base_unit: price.base_unit,
    }));

    // Insert the data into the database
    CryptoPrice.insertMany(cryptoPrices)
      .then(() => {
        console.log('Data inserted successfully');
      })
      .catch(error => {
        console.log('Error inserting data:', error);
      });
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });

app.listen(process.env.PORT, () => {
  console.log('Server started on port 4000');
});