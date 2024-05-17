import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["collegeBooks", "schoolBooks", "stationery", "literature"],
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [
      {
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    canReview: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

productSchema.methods.updateReviews = function () {
  let changedRating =
    this.reviews.reduce((acc, review) => acc + review.rating, 0) /
    this.reviews.length;
  this.rating = Math.ceil(changedRating);
  this.numReviews = this.reviews.length;
};

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
