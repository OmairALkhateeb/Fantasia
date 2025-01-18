'use client';  // Add this to indicate that the component should run on the client side

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';  // Import from next/navigation instead of next/router

const images1 = [
  { id: 1, image: '/assets/images/Jeans.avif', title: 'JENSE - جينز ', description: 'تلتقي الاناقة والراحة في مجموعتنا من الجينز , اكتشف احدث الصيحات المثاليةلاطلالة لا تشوبها شائبة', height: '350px' },
  { id: 4, image: '/assets/images/shirts.avif', title: 'SHIRTS - قمصان', height: '250px' },
];

const images2 = [
  { id: 2, image: '/assets/images/promotion.avif', title: 'PROMOTIONS -  العروض', description: 'اكتشف العروض الحصرية على افضل منتجاتنا. انها الفرصة المثالية لاثراء خزانة ملابسك بقطع عصرية باسعار معقولة.', height: '620px' },
];

const images3 = [
  { id: 3, image: '/assets/images/t-shirt.avif', title: 'T-SHirt - تي شيرت', height: '250px' },
  { id: 5, image: '/assets/images/shose.avif', title: 'SNEAKERS - أحذية', description: "عزز هويتك الانيقة واكتسب اسبوب جديد من الراحة في كل زوج من الأحذية الرياضية.\nاستمتع بالأناقة والوظائف في خطوة واحدة", height: '350px' },
];

const ThirdSection = () => {
  const router = useRouter();

// In the page where you're triggering the navigation
const handleClick = ({ path }) => {
  // Correct usage of string interpolation for dynamic values

  
  router.push(`/category_page?category=${path}`);
};

  

  const renderImageCard = (item) => (
    <div
      key={`image-${item.id}`}
      className="cursor-pointer overflow-hidden rounded-sm text-white flex flex-col"
      onClick={() => handleClick({ path: item.title })} // Pass the correct parameter

      style={{
        background: 'linear-gradient(222deg, #000229 0%, rgb(0, 2, 41) 100%)',
        padding: '0',
        borderRadius: '4px',
        border: '2px solid rgba(255, 255, 255, 0.05)',
        width: '350px',
        height: item.height,
        position: 'relative',
      }}
    >
      <div style={{ paddingTop: '30px', paddingBottom: '10px' }}>
        <h1 className="text-2xl font-semibold text-center">{item.title}</h1>
        {item.description && (
          <p className="text-gray-300 text-center" style={{ fontSize: '0.625rem', marginBottom: '8px' }}>
            {item.description}
          </p>
        )}
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
        className="hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <Image
          src={item.image}
          alt={`Image ${item.id}`}
          layout="fill"
          objectFit="cover"
          objectPosition={item.id !== 3 ? 'top' : 'center'}
          className="rounded-md drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] transform hover:scale-110"
        />
      </div>
    </div>
  );

  return (
    <section id="sec_section-section" className="py-12 px-4 bg-[#000112]">
      <h2 className="text-center text-4xl font-bold mb-4 text-white">الارتقاء بأسلوبك</h2>
      <p className="text-center text-sm text-white font-medium mb-2">
        اكتشف المزيج المثالي بين الراحة والأناقة مع مجموعتنا الحصرية. اكتشف العروض على الجينز والأحذية الرياضية والمزيد!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mx-auto py-4">
        <div className="flex flex-col justify-between gap-4">
          {images1.map(renderImageCard)}
        </div>

        <div className="flex flex-col justify-between gap-4">
          {images2.map(renderImageCard)}
        </div>

        <div className="flex flex-col justify-between gap-4">
          {images3.map(renderImageCard)}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
