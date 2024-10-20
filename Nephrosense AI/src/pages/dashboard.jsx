import React from "react";
import NavigationBar from "../components/navbar";
import Footer from "../components/footer";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove token from localStorage
    navigate('/');  // Redirect to login page
  };

    return (
      <>
      <NavigationBar />
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="p-10 text-3xl font-bold text-gray-900 sm:text-4xl">Welcome</h2>

    <p className="mt-4 text-gray-500 sm:text-xl">
      These are your health results
    </p>
  </div>

  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Glomerular Filtration Rate</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">4.8 mL/min</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Serum Creatinine</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24 mg/dL</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Blood Urea Nitrogen</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86 mg/dL</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Antinuclear Antibody</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
    </div>
  </dl>
  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Serum Calcium</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">4.8 mg/dL</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">C3 C4</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Protein in Urea</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86 mg/day</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Hermaturea</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
    </div>
  </dl>
  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Oxalate levels</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">4.8 mg/day</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Urine PH</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Pyuria</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
    </div>

    <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Blood Pressure</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86 mmHg</dd>
    </div>
  </dl>
  <div className="flex justify-center py-6">
      <Button 
        variant="contained" 
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
</div>
<Footer/>
</>
    )
}

export default Dashboard