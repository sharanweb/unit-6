const app = require("express")();
const path = require("path");
const cors = require("cors");
const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "RAZORPAY KEY",
  key_secret: "RAZORPAY SECRET",
});


  
  app.use(cors());
  

  app.post("/razorpay", async (req, res) => {
    const payment_capture = 1;
    const amount = 100;
    const currency = "INR";
  
    const options = {
      amount: amount * 100,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
  
    try {
      const res = await razorpay.orders.create(options);
      console.log(res);
      res.json({
        id: res.id,
        currency: res.currency,
        amount: res.amount,
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  app.listen(5000, () => {
    console.log("listening on port 5000");
  });