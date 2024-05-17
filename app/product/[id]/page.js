import Image from "next/image";
import Product from "@/models/productModel";
import connectMongoDB from "@/utils/connect";
import styles from "./page.module.css";
import AddToCartBtn from "@/components/Buttons/AddToCartBtn";

async function fetchProduct(id) {
  try {
    connectMongoDB();
    const product = await Product.findById(id).select('-createdAt -updatedAt').lean().exec();
    product._id = product._id.toString();
    return product;
  } catch (error) {
    console.log("error = ", error);
    throw new Error("Couldn't fetch the product");
  }
}

const page = async ({ params }) => {
  const data = await fetchProduct(params.id);
  console.log("this is the data = ", data);
  return (
    <div className="outer sectionContainer">
      <div className={styles.inner}>
        <div className={styles.left}>
          <Image
            width={400}
            height={500}
            src={data.image}
            className={styles.img}
          />
        </div>
        <div className={styles.right}>
          <h1>{data.name}</h1>
          <h2>{data.description}</h2>
          <h3>Rs {data.price}</h3>
          <AddToCartBtn product={data} />
        </div>
      </div>
    </div>
  );
};

export default page;
