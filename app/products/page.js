import React from "react";
import styles from "./page.module.css";
import Product from "@/models/productModel";
import Grid from "@/components/Grid/Grid";
import Pagination from "@/components/Pagination/Pagination";
import connectMongoDB from "@/utils/connect";
import SelectMenu from "@/components/Select/Select";
async function getProducts(page, category) {
  try {
    connectMongoDB();
    const pageSize = 12;
    const pageNumber = parseInt(page) || 1;
    let count, totalPage, products;
    if (category) {
      count = await Product.find({ category }).countDocuments();
      totalPage = Math.ceil(count / pageSize);
      products = await Product.find({ category })
        .limit(pageSize)
        .skip((pageNumber - 1) * pageSize);
    } else {
      count = await Product.find({}).countDocuments();
      totalPage = Math.ceil(count / pageSize);
      products = await Product.find({})
        .limit(pageSize)
        .skip((pageNumber - 1) * pageSize);
    }
    if (!products || products.length === 0) {
      console.log("inside of if");
      throw new Error("Couldn't fetch the products");
    }
    return { products, totalPage };
  } catch (error) {
    console.log("********************************");
    console.log("Error while fetching products : ", error);
    console.log("********************************");
  }
}

const Products = async ({ searchParams }) => {
  const page =
    searchParams.page === undefined ? 1 : parseInt(searchParams.page);
  const category = searchParams.category;
  console.log({ category });
  const { products, totalPage } = await getProducts(page, category);
  return (
    <div className={`sectionContainer ${styles.products}`}>
      <SelectMenu />
      <Grid products={products} />
      {totalPage > 1 && (
        <Pagination
          currentPage={page}
          totalPage={totalPage}
          baseUrl={
            category
              ? `products/?category=${category}&page=`
              : "products/?page="
          }
        />
      )}
    </div>
  );
};

export default Products;
