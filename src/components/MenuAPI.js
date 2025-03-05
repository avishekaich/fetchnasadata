import React, { useEffect, useState } from "react";

const MenuAPI = () => {
  const [EmployeeMenuDetailList, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://14.99.211.60:9009/api/APISFA/GetEmployeeMenu/57", {method:"get", mode:"no-cors"}
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.EmployeeMenuDetailList);
      } catch (error) {
        setError(error.message);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderMenu = (items) => {
    return (
      <ul>
        {items.map(({ AppMenuName, AppMenuIcon, link, submenu }) => (
          <li key={AppMenuName}>
            <a href={link}>{AppMenuIcon}</a>
            {submenu && submenu.length > 0 && renderMenu(submenu)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
    {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            {renderMenu(EmployeeMenuDetailList)}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuAPI;
