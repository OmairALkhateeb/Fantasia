import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Nav from "@/components/Navigations/CategoryNavbar";
import Footer from "@/components/sections/footer";


const ProductDetailsPage = () => {
  const router = useRouter();
  const productId = router.query.productId;

  // State for selected image, description visibility, and cart data
  const [selectedImage, setSelectedImage] = useState("/assets/images/add3.avif");
  const [visibleDescriptions, setVisibleDescriptions] = useState([false, false, false]);
  const [cartData, setCartData] = useState([
    { id: 1, name: "T-shirt", price: 450000, discount: 50000, image: "/assets/images/add1.avif", quantity: 1 },
    { id: 2, name: "T-shirt", price: 300000, discount: 30000, image: "/assets/images/add2.avif", quantity: 1 },
  ]);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    governorate: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    // Add form submission logic here
  };

  return (
    <section className="py-12 px-4 md:px-12 bg-[#000112]">
      <Nav />
      <div className="py-12 px-16 flex flex-col lg:flex-row custom-flex justify-center items-start min-h-screen bg-gray-800 mx-auto">
        
        {/* Order Summary */}
        <div className="px-12 w-full lg:w-2/5 flex flex-col justify-center lg:justify-end px-4 lg:px-8 mb-8 lg:mb-0">
          <div className="mt-8 border border-gray-600 px-8">
            <h1 className="text-4xl font-semibold text-white py-4">Order summary</h1>
            <ul>
              {cartData.map((product) => (
                <li key={product.id} className="py-2 flex items-center border-b border-gray-200 mb-4">
                  <Image src={product.image} alt={product.name} width={100} height={100} />
                  <div className="flex-1 ml-4">
                    <p className="font-semibold text-white">{product.name}</p>
                    <p className="text-gray-400">Size: M</p>
                    <p className="text-gray-400">Qty: 5</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Pricing Details */}
            <div className="mt-8 text-white flex flex-col items-center space-y-4 px-12 py-4">
              <div className="flex justify-between w-full max-w-md">
                <p className="text-gray-400">السعر قبل الخصم:</p>
                <p className="font-semibold">{(100000).toLocaleString()} IQD</p>
              </div>
              <div className="flex justify-between w-full max-w-md">
                <p className="text-gray-400">الخصم:</p>
                <p className="font-semibold text-green-500">{(50000).toLocaleString()} IQD</p>
              </div>
              <div className="flex justify-between w-full max-w-md">
                <p className="text-gray-400">المبلغ:</p>
                <p className="font-semibold">{(50000).toLocaleString()} IQD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal and Shipping Information Form */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between text-right px-4 overflow-y-auto h-full">
          <form onSubmit={handleSubmit} className="px-12 space-y-6 h-full">
            
            {/* Personal Information */}
            <h2 className="text-xl font-semibold text-white py-4 text-left px-4">Personal Information</h2>

            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-white mb-2 text-lg">الاسم</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="ضع اسمك الكامل هنا"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 py-2 px-2 text-white text-lg bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-right"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-white mb-2 text-lg">البريد الالكتروني</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 py-2 px-2 text-white text-lg bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-right"
              />
            </div>

            {/* Phone Number Input */}
            <div>
              <label htmlFor="phone" className="block text-white mb-2 text-lg">رقم الهاتف</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+964 ********"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 py-2 px-2 text-white text-lg bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-right"
              />
            </div>

            {/* Shipping Information */}
            <h2 className="text-xl font-semibold text-white py-4 text-left px-4">Shipping Information</h2>

{/* State and City (same row) */}
<div className="flex justify-between w-full space-x-4">
  {/* State Input */}
  <div className="w-full">
    <label htmlFor="state" className="block text-white mb-2 text-lg text-left">
      State
    </label>
    <input
      type="text"
      id="state"
      name="state"
      placeholder="State"
      value={formData.state}
      onChange={handleChange}
      required
      className="w-full p-3 py-2 px-2 text-white text-lg bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-left"
    />
  </div>

  {/* City Input */}
  <div className="w-full px-2">
    <label htmlFor="city" className="block text-white mb-2 text-lg text-left">
      City
    </label>
    <input
      type="text"
      id="city"
      name="city"
      placeholder="City"
      value={formData.city}
      onChange={handleChange}
      required
      className="w-full p-3 py-2 px-2 text-white text-lg bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-left"
    />
  </div>
</div>


{/* Address 1 Input */}
<div>
  <label htmlFor="address1" className="block text-white mb-2 text-lg text-left">
    Address 1
  </label>
  <input
    type="text"
    id="address1"
    name="address1"
    placeholder="Address 1"
    value={formData.address1}
    onChange={handleChange}
    required
    className="w-full p-3 py-2 px-2 text-white text-lg bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-left"
  />
</div>

{/* Address 2 Input */}
<div>
  <label htmlFor="address2" className="block text-white mb-2 text-lg text-left">
    Address 2
  </label>
  <input
    type="text"
    id="address2"
    name="address2"
    placeholder="Address 2"
    value={formData.address2}
    onChange={handleChange}
    className="w-full p-3 py-2 px-2 text-white text-lg bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white text-left"
  />
</div>
 


<button className="w-full p-3 py-2 px-2 text-white text-lg bg-[#282828] focus:outline-none focus:ring-2 focus:ring-blue-500">
  تاكيد الطلب
</button>

          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ProductDetailsPage;
