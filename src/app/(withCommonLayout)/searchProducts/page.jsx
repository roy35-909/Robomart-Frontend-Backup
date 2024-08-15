import ProductSearch from "./ProductSearch";

export async function generateMetadata({ searchParams }, parent) {
  const metaData = {
    title: `${searchParams?.search}`,
    alternates: {
      canonical: `https://www.robomartbd.com/searchProducts/?search=${encodeURI(
        searchParams?.search
      )}`,
    },
  };
  return metaData;
}

const SearchingProducts = (params) => {
  const searchTerm = params?.searchParams?.search;

  return (
    <>
      <ProductSearch searchTerm={searchTerm} />
    </>
  );
};

export default SearchingProducts;
