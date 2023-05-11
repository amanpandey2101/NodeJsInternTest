import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css"
import { PulseLoader } from "react-spinners";

function Table() {
  const [cryptoPrices, setCryptoPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setLoading(true);
    fetch("https://hodlinfo-d2ks.onrender.com/api/crypto")
      .then((response) => response.json())
      .then((data) => {
        setCryptoPrices(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  
    
   
  return (
    <div className="flex flex-col w-full  p-16 max-[768px]:p-4 ">
      <div className="text-center">
      {loading && <PulseLoader color={"white"} size={10} className='mb-2' />}
      </div>
      <div className="-my-2 sm:-mx-6 lg:-mx-8 overflow-x-auto">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <table className="min-w-full divide-y divide-gray-200 ">
              
                <thead className="bg-[#191D28]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xl font-medium text-gray-400 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-left text-xl font-medium text-gray-400 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xl font-medium text-gray-400 uppercase tracking-wider">
                      Last
                    </th>
                    <th className="px-6 py-3 text-left text-xl font-medium text-gray-400 uppercase tracking-wider">
                      Buy
                    </th>
                    <th className="px-6 py-3 text-left text-xl font-medium text-gray-400 uppercase tracking-wider">
                      Sell
                    </th>
                    <th className="px-6 py-3 text-left text-xl font-medium text-gray-400 uppercase tracking-wider">
                      Volume
                    </th>
                    <th className="px-6 py-3 text-left text-xl font-medium text-gray-400 uppercase tracking-wider">
                      Base Unit
                    </th>
                  </tr>
                </thead>
                <tbody className="  m-10">
                  {cryptoPrices.map((cryptoPrice, index) => (
                    <tr key={uuidv4()} className='bg-[#2E3241] ' >
                      <td className="px-6 py-4  text-white ">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4  text-md text-white ">
                        {cryptoPrice.name}
                      </td>
                      <td className="px-6 py-4 text-md text-white ">
                        {cryptoPrice.last}
                      </td>
                      <td className="px-6 py-4 text-md text-white ">
                        {cryptoPrice.buy}
                      </td>
                      <td className="px-6 py-4 text-md text-white ">
                        {cryptoPrice.sell}
                      </td>
                      <td className="px-6 py-4 text-md text-white ">
                        {cryptoPrice.volume}
                      </td>
                      <td className=" pr-16 py-4 pl-6 text-md text-white " >
                        {cryptoPrice.base_unit}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Table;
