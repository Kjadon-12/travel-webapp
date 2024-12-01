import React from 'react'

const MetaInfo = () => {
  return (
    <div>MetaInfo</div>
  )
}

export default MetaInfo

// const metaObject = {
//     internet: [
//       {
//         included: true,
//         price: "0.00 /unspecified",
//         currency: null,
//         type: "hotel",
//       },
//       {
//         included: false,
//         price: "1.00 RUB/per_hour",
//         currency: "RUB",
//         price_unit: "per_hour",
//         type: "room",
//       },
//     ],
//     meal: [
//       {
//         included: false,
//         price: "5000.00 RUB",
//         currency: "RUB",
//         type: "all-inclusive",
//       },
//       {
//         included: false,
//         price: "1000.00 RUB",
//         currency: "RUB",
//         type: "breakfast",
//       },
//       {
//         included: false,
//         price: "3000.00 RUB",
//         currency: "RUB",
//         type: "dinner",
//       },
//       {
//         included: false,
//         price: "2000.00 RUB",
//         currency: "RUB",
//         type: "lunch",
//       },
//     ],
//     children_meal: [
//       {
//         included: false,
//         price: "300.00 RUB",
//         currency: "RUB",
//         type: "breakfast",
//         age_range: "0-5",
//       },
//       {
//         included: false,
//         price: "400.00 RUB",
//         currency: "RUB",
//         type: "breakfast",
//         age_range: "6-12",
//       },
//     ],
//     extra_bed: [
//       {
//         included: false,
//         price: "100.00 ALL/per_guest_per_night",
//         currency: "ALL",
//         price_unit: "per_guest_per_night",
//         amount: 1,
//       },
//     ],
//     cot: [
//       {
//         included: true,
//         price: "0.00 /unspecified",
//         currency: null,
//         amount: 1,
//       },
//     ],
//     pets: [
//       {
//         included: false,
//         price: "50.00 EUR/per_guest_per_stay",
//         currency: "EUR",
//         price_unit: "per_guest_per_stay",
//       },
//     ],
//     shuttle: [
//       {
//         included: false,
//         price: "1000.00 RUB",
//         currency: "RUB",
//         shuttle_type: "one_way",
//         type: "train",
//       },
//       {
//         included: false,
//         price: "2000.00 RUB",
//         currency: "RUB",
//         shuttle_type: "one_way",
//         type: "airport",
//       },
//       {
//         included: true,
//         price: "0.00 ",
//         currency: null,
//         type: "airport_train",
//       },
//     ],
//     parking: [
//       {
//         included: false,
//         price: "500.00 RUB/per_car_per_night",
//         currency: "RUB",
//         price_unit: "per_car_per_night",
//       },
//     ],
//     children: [
//       {
//         age_range: "0-3",
//         price: "500.00 CHF",
//         currency: "CHF",
//         extra_bed: "available",
//       },
//       {
//         age_range: "4-9",
//         price: "700.00 ALL",
//         currency: "ALL",
//         extra_bed: "available",
//       },
//       {
//         age_range: "10-12",
//         price: "0.00 ",
//         currency: null,
//         extra_bed: "available",
//       },
//     ],
//     visa: {
//       visa_support: "support_enable",
//     },
//     deposit: [
//       {
//         availability: "available",
//         price: "1000.00 RUB/per_room_per_stay",
//         currency: "RUB",
//         price_unit: "per_room_per_stay",
//         pricing_method: "fixed",
//         payment_type: "card",
//         type: "keys",
//       },
//       {
//         availability: "available",
//         price: "10000.00 RUB/per_room_per_stay",
//         currency: "RUB",
//         price_unit: "per_room_per_stay",
//         pricing_method: "fixed",
//         payment_type: "cash",
//         type: "pet",
//       },
//       {
//         availability: "available",
//         price: "500.00 RUB/per_room_per_stay",
//         currency: "RUB",
//         price_unit: "per_room_per_stay",
//         pricing_method: "fixed",
//         type: "breakage",
//       },
//       {
//         availability: "available",
//         price: "100.00 RUB/per_room_per_stay",
//         currency: "RUB",
//         price_unit: "per_room_per_stay",
//         pricing_method: "fixed",
//       },
//     ],
//     no_show: {
//       availability: "available",
//       time: "09:00:00",
//       day_period: "after_midday",
//     },
//     add_fee: [],
//     check_in_check_out: [],
//     no_show_policy: {
//       time: "09:00:00",
//       period: "After Midday",
//       included: true,
//     },
//   };
//   const getPrice = (item) => {
//     const price = item.split("/")
//     return (`${price[0]} ${price[1].split("_").join(" ")}`)
//   };
//   return (
//     <>
//       <div className="md:flex-nowrap flex flex-wrap w-[90%] mx-auto gap-x-10 ">
//         <div className="md:w-1/2 w-full ">
//         {Object.keys(metaObject)?.slice(0, 7).map((objKey, index) => {
//           const obj = metaObject[objKey];
          
  
//           // Check if the object is an array and has at least one item
//           if (Array.isArray(obj) && obj.length > 0) {
//             return (
//               <div key={index} className=" p-1 my-3 border-b-[1px]">
//                 <h6 className="font-semibold text-lg mb-1 underline capitalize">
//                   {objKey}
//                 </h6>
  
//                 {/* Table-like structure for each key */}
//                 <div className={`grid grid-cols-2 gap-2  `}>
//                   <div>
//                     <p className="text-[16px]  mb-1">Type</p>
//                     {obj.map((item, itemIndex) => (
//                       <div key={`${objKey}-${itemIndex}`} className={`mb-1 ${itemIndex % 2 !== 0 ? "bg-gray-100" : ""} `}>
//                         <p className="text-[15px] text-gray-600 capitalize font-normal">
//                           {item?.type || objKey}:
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                   <div>
//                     <p className="text-[16px] mb-1">Price</p>
//                     {obj.map((item, itemIndex) => (
//                       <div key={`${objKey}-${itemIndex}`} className={`mb-1 ${itemIndex % 2 !== 0 ? "bg-gray-100" : ""} `}>
//                         {item?.included ? (
//                           <p className=" text-[15px] font-normal">Free</p>
//                         ) : (
//                           <p className="text-[15px] text-wrap font-normal">
//                             {item.price?.includes("/") ? getPrice(item.price) : item?.price}
//                           </p>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           }
  
//           // Return null or handle other cases where the object is not an array
//           return null;
//         })}
//         </div>
//         <div className="md:w-1/2 w-full">
//         {Object.keys(metaObject)?.slice(4).map((objKey, index) => {
//           const obj = metaObject[objKey];
          
  
//           // Check if the object is an array and has at least one item
//           if (Array.isArray(obj) && obj.length > 0) {
//             return (
//               <div key={index} className="border-b-[1px] my-3 p-1  ">
//                 <h6 className="font-semibold text-lg mb-1 underline capitalize">
//                   {objKey}
//                 </h6>
  
//                 {/* Table-like structure for each key */}
//                 <div className="grid grid-cols-2 gap-2">
//                   <div>
//                     <p className="text-[16px] font-medium mb-1">Type</p>
//                     {obj.map((item, itemIndex) => (
//                       <div key={`${objKey}-${itemIndex}`} className={`mb-1 ${itemIndex % 2 !== 0 ? "bg-gray-100" : ""} `}>
//                         <p className="text-[15px] text-gray-600 capitalize font-normal">
//                           {item?.type || objKey}:
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                   <div>
//                     <p className="text-[16px] font-medium mb-1">Price</p>
//                     {obj.map((item, itemIndex) => (
//                       <div key={`${objKey}-${itemIndex}`} className={`mb-1 ${itemIndex % 2 !== 0 ? "bg-gray-100" : ""} `}>
//                         {item?.included ? (
//                           <p className=" text-[15px] font-medium">Free</p>
//                         ) : (
//                           <p className="text-[15px] text-wrap font-normal">
//                             {item.price?.includes("/") ? getPrice(item.price) : item?.price}
//                           </p>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           }
  
//           // Return null or handle other cases where the object is not an array
//           return null;
//         })}
//         </div>
//       </div>
//     </>
//   );