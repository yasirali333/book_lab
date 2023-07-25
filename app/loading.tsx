// import { Box } from '@mui/material';
// import 'tailwindcss/tailwind.css';
import './loading.css';


export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
    {/* Loader Container */}
    <div className="loader-container">
      <svg className="loader-svg" width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0
          77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858
          100 50ZM14.8717 50C14.8717 69.4008 30.5992 85.1283 50 85.1283C69.4008
          85.1283 85.1283 69.4008 85.1283 50C85.1283 30.5992 69.4008 14.8717 50
          14.8717C30.5992 14.8717 14.8717 30.5992 14.8717 50Z" fill="#BDBDBD" fillOpacity="0.666667" />
        <path d="M50 0C42.5229 -8.91634e-08 35.141 1.67695 28.3978 4.90738C21.6546
          8.13781 15.7217 12.8395 11.036 18.6662C6.35027 24.493 3.03103 31.2964 1.32263
          38.5757C-0.385774 45.855 -0.43984 53.4248 1.16441 60.7278L16.0612 57.4554C14.9463
          52.3801 14.9838 47.1194 16.1711 42.0606C17.3584 37.0018 19.6651 32.2736 22.9215
          28.2242C26.1779 24.1749 30.301 20.9074 34.9873 18.6624C39.6736 16.4174 44.8037 15.2519
          50 15.2519V0Z" fill="#004D6D" />
      </svg>
    </div>
  </div>

  )
}

// export default function LoadingPage() {
//     return (
//       <div className="loader">
//          <div className="spinner">
          
//          </div>
        
//       </div>
//     )
//   }
  