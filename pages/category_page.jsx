import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Nav from "@/components/Navigations/CategoryNavbar";
import Footer from "@/components/sections/footer";
import FifthSecton from "@/components/sections/fifth_section";
import ProductByCategory from "@/components/sections/products_by_category_section";
import "./globals.css";

const CategoryPage = () => {
  const router = useRouter();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      setCategory(router.query.category || null);
    }
  }, [router.isReady, router.query.category]);

  return (
    <section
      id="sec_section-section"
      className="min-h-screen py-12 px-4 bg-[#000112] border-t border-gray-800"
    >
      <Nav />
      <ProductByCategory categoryName={category} />
      <FifthSecton />
      <Footer />
    </section>
  );
};

export default CategoryPage;
