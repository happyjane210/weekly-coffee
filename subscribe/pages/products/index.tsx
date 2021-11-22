import React from "react";
import { useRouter } from "next/router";
import Sidebar from "../../components/sidebar/sidebar";
import { Card } from "react-bootstrap";
import axios from "axios";
import { ProductItem } from "../../provider/modules/product";

export interface ProductsProp {
  item: ProductItem[];
}

const Products = ({ item }: ProductsProp) => {
  console.log("--SSR | item:ProductsProp--");
  console.log(item);
  const router = useRouter();
  // const dispatch = useDispatch<AppDispatch>();
  // const productData = useSelector((state: RootState) => state.product.data);

  // const product: ProductItem = {
  //   productId: productData.length ? productData[0].productId + 1 : 1,
  //   partnerId: 0,
  //   productName: "",
  //   productPrice: 0,
  //   productImageUrl: "",
  //   fileName: "",
  //   fileType: "",
  //   foodType: "",
  //   expirationData: "",
  //   manufacturer: "",
  //   manufacturingDate: "",
  //   companyName: "",
  //   productUploadDate: 0,
  //   companyIntroduce: "",
  //   companyAddress: "",
  //   companyContact: "",
  //   beanType: "",
  //   beanTag: "",
  //   processing: "",
  //   country: "",
  //   region: "",
  //   farm: "",
  //   cupNote: "",
  //   roastingPoint: "",
  //   variety: "",
  //   salesStatus: 0,
  // };

  // useEffect(() => {
  //   dispatch(loadProduct(product));
  // }, []);

  return (
    <>
      <article className="d-flex" style={{ minHeight: "calc(100vh - 290px)" }}>
        <Sidebar />
        <section style={{ width: "80vw", margin: "0 auto", padding: "1rem" }}>
          <h1 className="text-center my-5 p-4">
            <strong>PRODUCTS</strong>
          </h1>
          <div className="d-flex flex-wrap">
            {item.map((item, index) =>
              item.salesStatus === 1 ? (
                <Card
                  style={{
                    width: "calc((100% - 3rem) / 4)",
                    marginLeft: index % 4 === 0 ? "0" : "1rem",
                    marginTop: index > 3 ? "1rem" : "0",
                  }}
                  onClick={() => {
                    // id값을 물고 이동해야함
                    router.push(`/products/detail/${item.productId}`);
                  }}
                >
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={item.productImageUrl}
                      alt={item.productName}
                      width="150px"
                    />
                    <Card.Title className="text-center">
                      {item.productName}
                    </Card.Title>
                    <Card.Body>
                      <h2 className="text-center">
                        <b>{item.companyName}</b>
                      </h2>
                      <h4 className="text-center">{item.cupNote}</h4>
                      <h3 className="text-center" style={{ color: "#00bcd4" }}>
                        <b>{item.productPrice}</b>
                      </h3>
                    </Card.Body>
                  </Card.Body>
                </Card>
              ) : (
                <></>
              )
            )}
          </div>
        </section>
      </article>
    </>
  );
};

export async function getServerSideProps() {
  const res = await axios.get<ProductItem[]>(
    `${process.env.NEXT_PUBLIC_API_BASE}/products`
  );
  const item = res.data;

  return { props: { item } };
}

export default Products;
