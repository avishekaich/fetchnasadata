import React, { useEffect, useState } from "react";

const API_KEY = "luhAN7hK9UfXrLQNcUYeD7WkMmbAs4HlaNWfKEoA";  // Replace with your NASA API key
const API_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";

const NewsNew = () => {
  const [photoData, setPhotoData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10); // Set a reasonable limit

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}?sol=1000&page=${currentPage}&api_key=${API_KEY}`);
        const data = await response.json();

        if (data.photos.length === 0) {
          setTotalPages(currentPage - 1); // Adjust total pages if API runs out of data
        } else {
          setPhotoData(data.photos);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]); // Fetch new data when page changes

  return (
    <>
      <div className="my-4">
        <h4 className="mb-3">Mars Rover Photos</h4>
        <div className="row">
          {photoData.length > 0 ? (
            photoData.map((photo) => (
              <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={photo.id}>
                <div className="card">
                  <img className="img-fluid" src={photo.img_src} alt={`Mars Rover - ${photo.rover.name}`} />
                  <div className="card-body">
                    <h6 className="card-title">
                      <strong>Earth Date:</strong> {photo.earth_date}
                    </h6>
                    <p className="card-text">
                      <strong>Camera:</strong> {photo.camera.full_name}
                    </p>
                    <p className="card-text">
                      <strong>Rover:</strong> {photo.rover.name} (Status: {photo.rover.status})
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p>Loading... Please Wait</p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="text-center mt-4">
          <button
            className="btn btn-primary mx-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button
            className="btn btn-primary mx-2"
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsNew;