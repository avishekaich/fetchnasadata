import React, { useEffect, useState } from "react";

const ContactMenu = () => {
  const [apidata, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://14.99.211.60:9009/api/APISFA/GetEmployeeMenu/57"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.EmployeeMenuDetailList);
        //console.log();
      } catch (error) {
        setError(error.message);
        //console.log(error);
      }
    };
    fetchData();
  }, []);

  const renderMenu = (items) => {
    return (
      <ul>
        {apidata.map(({ AppMenuName, AppMenuIcon, link, SubMenuList }) => (
          <li key={AppMenuName}>
            <a href={link}>{AppMenuIcon}</a>
            {SubMenuList && SubMenuList.length > 0 && renderMenu(SubMenuList)}
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
          <div className="collapse navbar-collapse">{renderMenu(apidata)}</div>
        </div>
      </nav>
    </>
  );
};

export default ContactMenu;
