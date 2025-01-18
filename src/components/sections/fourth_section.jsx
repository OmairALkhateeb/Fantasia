"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';

const Product = [
  { id: 4, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13"  }, 
  { id: 5, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13"  }, 
  { id: 6, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13"  }, 
  { id: 7, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13"  }, 
  { id: 8, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13"  }, 
  { id: 9, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13"  }, 
  { id: 10, image: '/assets/images/add2.avif', title: 'تيشرت', subtitle: 'IQD - 10,000', subtitle2: 'IQD - 25,000', percentage: '75%', quantity: '55', code: "13"  }, 
];

const Product_with_st = [
  { id: 1, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45", status: "Available" },
  { id: 2, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45", status: "Out of Stock" },
  { id: 3, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45", status: "Available" },
  { id: 4, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45", status: "Available" },  
  { id: 5, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45", status: "Available" },
  { id: 6, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45", status: "Out of Stock" },  
  { id: 7, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45", status: "Available" },
  { id: 8, image: '/assets/images/add3.avif', title: 'بنطلون-رجالي-شتوي', subtitle: 'IQD - 50,000', subtitle2: 'IQD - 65,000', percentage: '20%', quantity: '12', code: "45", status: "Out of Stock" },
];

const FourthSection = () => {
  const router = useRouter(); // Initialize the useRouter hook
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const navigateToProductDetails = (productId) => {
    // router.push(`/checkoust_section`);
    router.push(`/product_details_page`);
  };

  return (
    <section className="relative py-12 px-4 bg-[#000112]" >
      
      <h1 className="text-center text-4xl font-bold mb-8 text-white">الأكثر رواجًا الآن</h1>

      {/* First Row */}
      <div className="relative mb-8">
        <button
          onClick={() => scrollLeft(scrollContainerRef1)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 shadow-lg hover:bg-opacity-90 focus:outline-none z-10"
        >
          &#10094;
        </button>

        <button
          onClick={() => scrollRight(scrollContainerRef1)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 shadow-lg hover:bg-opacity-90 focus:outline-none z-10"
        >
          &#10095;
        </button>

        <div
          ref={scrollContainerRef1}
          className="flex gap-4 py-4 items-center no-scrollbar"
          style={{
            scrollBehavior: "smooth",
            flexWrap: "nowrap",
            overflowX: "auto",
          }}
        >
          {Product.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[300px] h-[60vh] overflow-hidden relative"
              onClick={() => navigateToProductDetails(item.id)} // Handle click to navigate to product details page
            >
              <Image
                src={item.image}
                alt={`Image ${item.id}`}
                width={300}
                height={0}
                style={{ height: "50vh", objectFit: "cover" }}
              />
              <div className="p-2 shadow-md">
                <div className="flex justify-between mt-1">
                  <span className="text-gray-400 bg-gray-700 bg-opacity-80 px-1 py-1 rounded-md">{item.code}%</span>
                  <h2 className="text-lg text-white font-semibold">{item.title}</h2>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-gray-400 px-1">{item.subtitle2}</span>
                  <span className="text-white">{item.subtitle}</span>
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-white">{item.quantity} القطع المتوفرة</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="relative bg-[#000112]">
        <button
          onClick={() => scrollLeft(scrollContainerRef2)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 shadow-lg hover:bg-opacity-90 focus:outline-none z-10"
        >
          &#10094;
        </button>

        <button
          onClick={() => scrollRight(scrollContainerRef2)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-4 shadow-lg hover:bg-opacity-90 focus:outline-none z-10"
        >
          &#10095;
        </button>

        <div
          ref={scrollContainerRef2}
          className="flex gap-4 py-4 items-center no-scrollbar"
          style={{
            scrollBehavior: "smooth",
            flexWrap: "nowrap",
            overflowX: "auto",
          }}
        >
          {Product_with_st.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[300px] h-[60vh] overflow-hidden relative"
              onClick={() => navigateToProductDetails(item.id)} // Handle click to navigate to product details page
            >
              <Image
                src={item.image}
                alt={`Image ${item.id}`}
                width={300}
                height={0}
                style={{ height: "50vh", objectFit: "cover" }}
              />
              <div className="p-2 shadow-md">
                <div className="flex justify-between mt-1">
                  <span className="text-gray-400 bg-gray-700 bg-opacity-80 px-1 py-1 rounded-md">{item.code}%</span>
                  <h2 className="text-lg text-white font-semibold">{item.title}</h2>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-gray-400 px-1">{item.subtitle2}</span>
                  <span className="text-white">{item.subtitle}</span>
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-white">{item.quantity} القطع المتوفرة</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
