// import React, { use, useState } from "react";
// import Container from "./Container";
// import vector1 from "../assets/vector1.png";
// import { toast } from "react-toastify";

// const Main = ({ fetchPromise }) => {
//     const fetchData = use(fetchPromise);
//     const [tickets, setTickets] = useState(
//         fetchData.map((ticketData) => ({ ...ticketData, status: "open" }))
//     );

//     // কাউন্ট
//     const inProgressCount = tickets.filter((ticketData) => ticketData.status === "in-progress").length;
//     const resolvedCount = tickets.filter((ticketData) => ticketData.status === "resolved").length;

//     // Ticket এ ক্লিক করলে -> open থেকে in-progress
//     const handleTicketClick = (id) => {
//         setTickets((prev) =>
//             prev.map((ticketData) =>
//                 ticketData.id === id && ticketData.status === "open"
//                     ? { ...ticketData, status: "in-progress" }
//                     : ticketData
//             )
//         );
//         toast.success("Ticket moved to In-Progress!",);
//     };

//     // Complete বাটনে চাপলে -> in-progress থেকে resolved
//     const handleComplete = (id) => {
//         setTickets((prev) =>
//             prev.map((ticketData) =>
//                 ticketData.id === id && ticketData.status === "in-progress"
//                     ? { ...ticketData, status: "resolved" }
//                     : ticketData
//             )
//         );
//         toast.success("Ticket Resolved!", );
//     };

//     return (
//         <div>
//             {/* count=box */}
//             <Container>
//                 <div className="grid grid-cols-2 gap-5 my-10">
//                     <div className="bg-[linear-gradient(125.07deg,#632EE3,#9F62F2)] rounded-lg">
//                         <div className="p-6" style={{ backgroundImage: `url(${vector1})` }}>
//                             <h2 className="font-bold text-[35px] text-center text-white">In-Progress</h2>
//                             <p className="font-semibold text-[46px] text-center text-white">{inProgressCount}</p>
//                         </div>
//                     </div>

//                     <div className="bg-[linear-gradient(90deg,#54D068,#00827A)] rounded-lg">
//                         <div className="p-6" style={{ backgroundImage: `url(${vector1})` }}>
//                             <h2 className="font-bold text-[35px] text-center text-white">Resolved</h2>
//                             <p className="font-semibold text-[46px] text-center text-white">{resolvedCount}</p>
//                         </div>
//                     </div>
//                 </div>
//             </Container>

// {/* customer ticker */}
//             <Container>
//                 <div className="flex flex-col lg:flex-row gap-6 mb-8">
//                     {/* Customer Tickets */}
//                     <div className="flex-1">
//                         <h1 className="font-bold text-2xl mb-4">Customer Tickets</h1>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             {tickets
//                                 .filter(ticketData => ticketData.status !== "resolved") // ✅ resolved বাদ
//                                 .map((ticketData) => (
//                                     <div
//                                         key={ticketData.id}
//                                         onClick={() => handleTicketClick(ticketData.id)}
//                                         className="p-6 bg-white rounded-3xl shadow-lg cursor-pointer"
//                                     >
//                                         <div className="flex justify-between items-center mb-4">
//                                             <h2 className="text-lg font-semibold">{ticketData.title}</h2>
//                                             <div
//                                                 className={`px-4 py-2 rounded-full flex items-center ${ticketData.status === "open"
//                                                     ? "bg-green-200"
//                                                     : ticketData.status === "in-progress"
//                                                         ? "bg-yellow-200"
//                                                         : "bg-gray-200"
//                                                     }`}
//                                             >
//                                                 <span className="text-sm font-medium">{ticketData.status}</span>
//                                             </div>
//                                         </div>
//                                         <p className="text-gray-600 mb-4">{ticketData.description}</p>
//                                         <div className="flex justify-between text-sm">
//                                             <span>#{ticketData.id}</span>
//                                             <span
//                                                 className={`font-semibold ${ticketData.priority === "High" ? "text-red-500" : "text-yellow-500"
//                                                     }`}
//                                             >
//                                                 {ticketData.priority.toUpperCase()} PRIORITY
//                                             </span>
//                                             <span>{ticketData.customer}</span>
//                                         </div>
//                                     </div>
//                                 ))}
//                         </div>
//                     </div>

//                     {/* Task Status */}
//                     <div className="w-full lg:w-[320px]">
//                         <h1 className="font-semibold text-xl mb-2">Task Status</h1>
//                         {tickets
//                             .filter((data) => data.status === "in-progress")
//                             .map((data) => (
//                                 <div
//                                     key={data.id}
//                                     className=" rounded-lg p-4 bg-white shadow-sm mb-3"
//                                 >
//                                     <h1 className="font-bold text-center">{data.title}</h1>
//                                     <button
//                                         onClick={() => handleComplete(data.id)}
//                                         className="w-full bg-green-700 text-white p-3 rounded-lg font-bold mt-3"
//                                     >
//                                         Complete
//                                     </button>
//                                 </div>
//                             ))}

//                         <h1 className="font-semibold text-xl mb-2">Resolved Task</h1>
//                         {tickets
//                             .filter((data) => data.status === "resolved")
//                             .map((data) => (
//                                 <div
//                                     key={data.id}
//                                     className=" rounded-lg p-4 bg-white shadow-sm mb-3"
//                                 >
//                                     <h1 className="font-bold text-center">{data.title}</h1>
//                                 </div>
//                             ))}
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     );
// };

// export default Main;