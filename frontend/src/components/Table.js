import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import './table.css'

function Table() {
  const [cryptoPrices, setCryptoPrices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/crypto")
      .then((response) => response.json())
      .then((data) => setCryptoPrices(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden p-16 ">
      <div className="-my-2 sm:-mx-6 lg:-mx-8 ">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-[#121212]">
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
                <tbody className=" divide-y divide-gray-200">
                  {cryptoPrices.map((cryptoPrice, index) => (
                    <tr key={uuidv4()} className='' >
                      <td className="px-6 py-6 whitespace-nowrap text-white">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4  text-md text-white ">
                        {cryptoPrice.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md text-white ">
                        {cryptoPrice.last}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md text-white ">
                        {cryptoPrice.buy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md text-white ">
                        {cryptoPrice.sell}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-md text-white ">
                        {cryptoPrice.volume}
                      </td>
                      <td className=" pr-16 py-4 whitespace-nowrap text-md text-white " >
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
