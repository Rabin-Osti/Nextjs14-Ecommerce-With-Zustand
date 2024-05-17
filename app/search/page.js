import Grid from "@/components/Grid/Grid";
import Pagination from "@/components/Pagination/Pagination";
import Product from "@/models/productModel";

const SearchedProducts = async (searchedTerm, pageNumber) => {
  try {
    console.log({ searchedTerm, pageNumber });
    if (!searchedTerm) throw new Error("Something went wrong.");
    let keyword = { name: RegExp(searchedTerm, "i") };

    const pageSize = 8;

    const page = parseInt(pageNumber) || 1;
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    const totalPage = Math.ceil(count / pageSize);
    return { products, totalPage };
  } catch (error) {
    throw new Error("Something went wrong.");
  }
};
const Search = async ({ searchParams }) => {
  const page = parseInt(searchParams.page);
  const searchedTerm = searchParams.query;
  console.log({ searchedTerm });
  const data = await SearchedProducts(searchedTerm, page);
  console.log({ data: data });
  if (!data.products.length) {
    return <h1>No search result.</h1>;
  }
  return (
    <div>
      <Grid products={data.products} />
      {data.totalPage > 1 && (
        <Pagination
          currentPage={page}
          totalPage={data.totalPage}
          baseUrl={`/search?query=${searchedTerm}&page=`}
        />
      )}
    </div>
  );
};

export default Search;
