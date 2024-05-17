import Grid from "@/components/Grid/Grid";
import Product from "@/models/productModel";
import connectMongoDB from "@/utils/connect";
async function getHomeData(pageNumber) {
  try {
    connectMongoDB();
    const pageSize = 12;
    const page = parseInt(pageNumber) || 1;
    const products = await Product.find({})
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    if (!products) {
      throw new Error("Couldn't fetch the products");
    }
    return products;
  } catch (error) {
    console.log("********************************");
    console.log("Error while fetching todos : ", error);
    console.log("********************************");
  }
}

const Home = async () => {
  const data = await getHomeData();
  return (
    <div className="sectionContainer">
      <Grid products={data} />
    </div>
  );
};

export default Home;
