import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const banner = await getBanner("c569cb72-3e77-4523-9300-ea44d1ea77f0");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        {banner ? (
          <Banner data={banner} />
        ) : (
          <div className="text-center text-muted-foreground">No banner available</div>
        )}
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
