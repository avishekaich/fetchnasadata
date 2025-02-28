import React, { useEffect, useState } from "react";

const DataInTable = () => {
  const [apidata, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto mt-5">
        <h2 className="text-2xl font-bold mb-4">User Data</h2>
        {error ? (
          <p className="text-red-500">Failed to fetch data: {error}</p>
        ) : (
          <table className="table-auto border-collapse border border-gray-400 w-full">
            <thead>
              <tr className="bg-gray-200">
                {/* <th className="border border-gray-400 px-4 py-2">ID</th> */}
                <th className="border border-gray-400 px-4 py-2">Name</th>
                <th className="border border-gray-400 px-4 py-2">Email</th>
                <th className="border border-gray-400 px-4 py-2">Phone</th>
              </tr>
            </thead>
            <tbody>
              {apidata.map((data) => (
                <tr key={data.id} className="text-center">
                  {/* <td className="border border-gray-400 px-4 py-2">
                    {data.id}
                  </td> */}
                  <td className="border border-gray-400 px-4 py-2">
                    {data.Nation}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {data.Year}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {data.Population}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default DataInTable;
