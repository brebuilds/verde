
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@200;300;400;500;600&display=swap');
        
        * {
          font-family: 'Roboto Condensed', sans-serif;
          font-weight: 300;
          scroll-behavior: smooth;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-weight: 400;
        }
        
        .font-bold {
          font-weight: 500 !important;
        }
        
        .font-semibold {
          font-weight: 400 !important;
        }
        
        .font-medium {
          font-weight: 400 !important;
        }
        
        /* Modern scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #b91c1c, #991b1b);
        }
        
        /* Custom selection */
        ::selection {
          background-color: rgba(220, 38, 38, 0.2);
          color: #1f2937;
        }
        
        /* Smooth focus transitions */
        *:focus {
          outline: none;
        }
      `}</style>
      {children}
    </div>
  );
}
