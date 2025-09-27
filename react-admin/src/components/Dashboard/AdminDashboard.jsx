// import React from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Users,
//   Calendar,
//   Cube,
//   Airplane,
//   DollarSign,
//   Bell,
// } from "lucide-react";

// // AdminDashboard.jsx
// // Single-file React component (TailwindCSS + Recharts + lucide-react icons)
// // Default export: AdminDashboard

// const stats = {
//   totalBookings: 124,
//   totalCustomers: 58,
//   activePackages: 5,
//   upcomingTrips: 8,
// };

// const revenueData = [
//   { month: "Jan", revenue: 2000 },
//   { month: "Feb", revenue: 2500 },
//   { month: "Mar", revenue: 3000 },
//   { month: "Apr", revenue: 2200 },
//   { month: "May", revenue: 3500 },
//   { month: "Jun", revenue: 4200 },
//   { month: "Jul", revenue: 3800 },
//   { month: "Aug", revenue: 4500 },
//   { month: "Sep", revenue: 4800 },
// ];

// const inquiries = [
//   {
//     id: "TCK-001",
//     name: "Sadia Akter",
//     subject: "Inquiry about Maldives honeymoon package",
//     date: "2025-09-20",
//   },
//   {
//     id: "TCK-002",
//     name: "Rana Hasan",
//     subject: "Request for invoice correction",
//     date: "2025-09-22",
//   },
//   {
//     id: "TCK-003",
//     name: "Nusrat",
//     subject: "Change booking date",
//     date: "2025-09-25",
//   },
// ];

// export default function AdminDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-3xl font-semibold">Admin Panel</h1>
//           <div className="flex items-center gap-4">
//             <input
//               className="px-3 py-2 border rounded-lg bg-white text-sm w-72 outline-none"
//               placeholder="Search..."
//             />
//             <div className="w-10 h-10 rounded-full bg-gray-200 grid place-items-center">
//               <span className="text-gray-600">AR</span>
//             </div>
//           </div>
//         </div>

//         {/* Grid: Stats + Right column */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Left: Stat cards */}
//           <div className="lg:col-span-2">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//               <StatCard
//                 icon={<Cube className="w-6 h-6 text-blue-600" />}
//                 title="Total Bookings"
//                 value={stats.totalBookings}
//               />
//               <StatCard
//                 icon={<Users className="w-6 h-6 text-blue-600" />}
//                 title="Total Customers"
//                 value={stats.totalCustomers}
//               />
//               <StatCard
//                 icon={<Cube className="w-6 h-6 text-blue-600" />}
//                 title="Active Packages/Tours"
//                 value={stats.activePackages}
//               />
//               <StatCard
//                 icon={<Airplane className="w-6 h-6 text-blue-600" />}
//                 title="Upcoming Trips"
//                 value={stats.upcomingTrips}
//               />
//             </div>

//             {/* Revenue chart */}
//             <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h2 className="text-lg font-medium">Revenue (Monthly)</h2>
//                 <div className="text-sm text-gray-500">Today: ৳4,800</div>
//               </div>
//               <div style={{ width: "100%", height: 200 }}>
//                 <ResponsiveContainer>
//                   <AreaChart data={revenueData}>
//                     <defs>
//                       <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
//                         <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
//                       </linearGradient>
//                     </defs>
//                     <XAxis dataKey="month" />
//                     <YAxis />
//                     <Tooltip />
//                     <Area
//                       type="monotone"
//                       dataKey="revenue"
//                       stroke="#3b82f6"
//                       fillOpacity={1}
//                       fill="url(#colorRev)"
//                     />
//                   </AreaChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>

//             {/* Quick links / modules list */}
//             <div className="bg-white rounded-lg shadow-sm p-4">
//               <h3 className="font-medium mb-3">Management Tools</h3>
//               <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
//                 <div>User & Role Management</div>
//                 <div>Marketing & Promotions</div>
//                 <div>Travel Packages & Tours</div>
//                 <div>Content Management (CMS)</div>
//                 <div>Booking Management</div>
//                 <div>Reports & Analytics</div>
//                 <div>Transportation & Accommodation</div>
//                 <div>Settings</div>
//               </div>
//             </div>
//           </div>

//           {/* Right column: Inquiries / tickets */}
//           <aside>
//             <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className="font-medium">Latest Inquiries</h3>
//                 <Bell className="w-5 h-5 text-gray-500" />
//               </div>
//               <ul className="space-y-3">
//                 {inquiries.map((inq) => (
//                   <li key={inq.id} className="border rounded p-3">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <div className="font-medium">{inq.name}</div>
//                         <div className="text-sm text-gray-600">{inq.subject}</div>
//                       </div>
//                       <div className="text-xs text-gray-500">{inq.date}</div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Mini stats */}
//             <div className="bg-white rounded-lg shadow-sm p-4">
//               <h4 className="font-medium mb-2">Quick Stats</h4>
//               <div className="grid grid-cols-1 gap-2 text-sm text-gray-700">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <DollarSign className="w-4 h-4 text-green-600" />
//                     <span>Today's Revenue</span>
//                   </div>
//                   <div className="font-medium">৳4,800</div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4 text-indigo-600" />
//                     <span>Upcoming Trips</span>
//                   </div>
//                   <div className="font-medium">{stats.upcomingTrips}</div>
//                 </div>
//               </div>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// }

// function StatCard({ icon, title, value }) {
//   return (
//     <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
//       <div className="w-12 h-12 rounded-md bg-gray-50 grid place-items-center">{icon}</div>
//       <div>
//         <div className="text-sm text-gray-500">{title}</div>
//         <div className="text-2xl font-semibold">{value}</div>
//       </div>
//     </div>
//   );
// }
