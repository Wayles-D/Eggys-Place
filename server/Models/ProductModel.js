import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
  },

  description: {
    type: String,
    required: [true, "description is required"],
  },

  image: {
    type: String,
    required: [true, "please enter the product url"],
  },

  price: {
    type: String,
    required: [true, "price is required"],
  },

  category: {
    type: String,
    required: [true, "category is required"],
  },

  duration: {
    type: String,
    required: [true, "duration is required"],
  },
  
  rating: {
    type: String,
    required: [true, "rating is required"],
  },
},{timestamps:true});

// export the model
const PRODUCT = mongoose.model("product", productSchema);

export default PRODUCT
