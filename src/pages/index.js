import Head from "next/head";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ProductFeed from "../Components/ProductFeed";

export default function Home() {
  const search = () => {
    alert("search not available");
  };
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0 by Bhavik</title>
        <link
          rel="shortcut icon"
          href="https://admin.itsnicethat.com/images/4YEKLST2YLtZqyvTssrmZ897tZE=/199226/width-1440%7Cformat-jpeg/amazon_old_app_icon_graphic_design_itsnicethat.png"
        ></link>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed />
      </main>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const products = await fetch('https://fakestoreapi.com/products').then(
//     (res) => res.json()
//   )
//   return {
//     props: {
//       products,
//     }
//   }
// }