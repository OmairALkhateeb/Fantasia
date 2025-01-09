import React from "react";
import Image from "next/image"; 

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
const CustomImageCard = ({ item1, item2 }) => {
  return (
    <div
      className="cursor-pointer overflow-hidden rounded-sm text-white flex flex-col transform transition-all duration-300"
      style={{
        background: "linear-gradient(222deg, #000229 0%, rgb(0, 2, 41) 100%)",
        borderRadius: "4px",
        border: "2px solid rgba(255, 255, 255, 0.05)",
        width: "350px",
        height: "620px",
        position: "relative",
      }}
    >
      <button
        style={{
          width: "100%",
          height: "300px",
          position: "relative",
          padding: 0,
          border: "none",
          background: "none",
        }}
      >
        <Image
          src={item1.image}
          alt={`Image ${item1.id}`}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          className="rounded-t-md transition-transform duration-300 hover:scale-110"
        />
      </button>

      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          margin: 0,
        }}
      >
        <div style={{ textAlign: "center", padding: "8px 0" }}>
          <h1
            className="text-2xl font-semibold"
            style={{ margin: 0, padding: "8px 0" }}
          >
            {item1.title}
          </h1>
          <p
            className="text-gray-300"
            style={{ fontSize: "0.625rem", margin: 0, padding: "8px 0" }}
          >
            {item1.description}
          </p>
        </div>
        <div style={{ width: "100%", height: "300px", position: "relative" }}>
          <Image
            src={item2.image}
            alt={`Image ${item2.id}`}
            layout="fill"
            objectFit="cover"
            className="rounded-b-md transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};


const ThirdSection = () => {
  return (
    <section id="sec_section-section" className="py-12 px-4 bg-[#000112]">
      <h2 className="text-center text-4xl font-bold mb-4 text-white">الارتقاء بأسلوبك</h2>
      <p className="text-center text-sm text-white font-medium mb-2">
        اكتشف المزيج المثالي بين الراحة والأناقة مع مجموعتنا الحصرية. اكتشف العروض على الجينز والأحذية الرياضية والمزيد!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mx-auto py-4">
        <div className="flex flex-col justify-between gap-4">
          {images1.map((item) => (
            <div
              key={`image-${item.id}`}
              className="cursor-pointer overflow-hidden rounded-sm text-white flex flex-col"
              style={{
                background: "linear-gradient(222deg, #000229 0%, rgb(0, 2, 41) 100%)",
                padding: "0",
                borderRadius: "4px",
                border: "2px solid rgba(255, 255, 255, 0.05)",
                width: "350px",
                height: item.height,
                position: "relative",
              }}
            >
              <div style={{ paddingTop: "30px", paddingBottom: "10px" }}>
                <h1 className="text-2xl font-semibold text-center">{item.title}</h1> 
                {item.description && (
                  <p className="text-gray-300 text-center" style={{ fontSize: "0.625rem", marginBottom: "8px" }}>
                    {item.description}
                  </p>
                )}
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <Image
                  src={item.image}
                  alt={`Image ${item.id}`}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top" 
                  className="rounded-md drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] transform hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        <CustomImageCard item1={images2[0]} item2={images2[0]} />

        <div className="flex flex-col justify-between gap-4">
          {images3.map((item) => (
            <div
              key={`image-${item.id}`}
              className="cursor-pointer overflow-hidden rounded-sm text-white flex flex-col"
              style={{
                background: "linear-gradient(222deg, #000229 0%, rgb(0, 2, 41) 100%)",
                padding: "0", 
                borderRadius: "4px",
                border: "2px solid rgba(255, 255, 255, 0.05)",
                width: "350px",
                height: item.height,
                position: "relative",
              }}
            >
              <div style={{ paddingTop: "30px", paddingBottom: "10px" }}>
                <h1 className="text-2xl font-semibold text-center">{item.title}</h1> 
                {item.description && (
                  <p className="text-gray-300 text-center" style={{ fontSize: "0.625rem", marginBottom: "8px" }}>
                    {item.description}
                  </p>
                )}
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
                className="hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <Image
                  src={item.image}
                  alt={`Image ${item.id}`}
                  layout="fill"
                  objectFit="cover"
                  style={{
                    objectPosition: item.id !== 3 ? "top" : "center", // Only crop from the top for id=3
                  }}
                  className="rounded-md drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)] transform hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ThirdSection;
