import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
  id: Number,
  image: String,
  title: String,
  description: String,
  category: String,
  price: Number,
  dateOfSale: Date,
  sold: Boolean,
});

export default mongoose.model("Transaction", TransactionSchema);
