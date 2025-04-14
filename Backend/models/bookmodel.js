import mongoose from "mongoose";

// Define schema
const bookschema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Define model
export const Book = mongoose.model("Book", bookschema);
