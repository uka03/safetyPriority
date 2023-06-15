import React from "react";

export default function NotFound(props) {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-gray-600">Page not found</p>
        <p className="text-gray-600 mt-4">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
