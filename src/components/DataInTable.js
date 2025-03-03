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
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h5 className="my-4">User Data</h5>
      {error ? (
        <p className="text-red-500">Failed to fetch data: {error}</p>
      ) : (
        <div className="card">
          <div className="card-body">
            <table className="table table-bordered">
              {/* style={{border: "none"}} */}
              <thead>
                <tr>
                  {/* <th className="border border-gray-400 px-4 py-2">ID</th> */}
                  <th>Nation</th>
                  <th>Year</th>
                  <th>Population</th>
                </tr>
              </thead>
              <tbody>
                {apidata.map((dataTable) => (
                  <tr key={dataTable.id}>
                    {/* <td className="border border-gray-400 px-4 py-2">
                    {data.id}
                  </td> */}
                    <td>{dataTable.Nation}</td>
                    <td>{dataTable.Year}</td>
                    <td>{dataTable.Population}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default DataInTable;
