// import React from 'react';

// const App = () => {
//   return (
//     <div>
//       <h1>hello</h1>
//       <div>
//   <div className="mb-3">
//     <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//     <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
//   </div>

// </div>
    
//     </div>
//   );
// };


// export default function App() {
//   return (
//     <div>
//     <h1 style={{ color: "blue", backgroundColor: "lightgray", fontSize: "24px" }}>
//       Inline CSS Example
//     </h1>
//     </div>
//   );
// }

// export default App;









// import React from 'react';
// import AppExternal from './AppExternal';

// export default function App() {
//   return (
//     <div>
//       <h1>hello</h1>

//       {/* Form Section */}
//       <div className="mb-3">
//         <label htmlFor="exampleFormControlInput1" className="form-label">
//           Email address
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           id="exampleFormControlInput1"
//           placeholder="name@example.com"
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="exampleFormControlTextarea1" className="form-label">
//           Example textarea
//         </label>
//         <textarea
//           className="form-control"
//           id="exampleFormControlTextarea1"
//           rows={3}
//         />
//       </div>

//       {/* Inline CSS Example */}
//       <h1 style={{ color: "blue", backgroundColor: "lightgray", fontSize: "24px", textAlign: "right" }}>
//         Inline CSS Example
//       </h1>

//       <AppExternal/>
//     </div>
//   );
// }




import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/Contactpage";
import Produnct from "./pages/produnct";
import Category from "./pages/Category";



const App = () => {
  return (
    <div>
      <div>
        <h1>This is header</h1>
      </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/product" element={<Produnct/>}>
              <Route path="category" element={<Category />} />
            </Route>


              

            <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <div>
        <h1>This is footer</h1>
      </div>
    </div>
  )
}
export default App;



