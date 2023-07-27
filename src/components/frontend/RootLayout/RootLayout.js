// import "./globals.css";

import Footer from "../Footer/footer";
import Navbar from "../Navbar/navbar";

// export const metadata = {
//     title: "Computer-Mart",
//     description: "Generated By Computer Mart"
// };

const RootLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />            
        </div>
    );
};

export default RootLayout;

// import './globals.css'

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

// export default function RootLayout({children}){
//   return (
//     <html lang="en">
//       <body>
//       <div className="min-h-screen"> 
//       {children}
//       </div>
//       </body>
//     </html>
//   )
// }