import React, { useEffect, useState } from "react";

const NewsNew = () => {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=luhAN7hK9UfXrLQNcUYeD7WkMmbAs4HlaNWfKEoA"
        );
        const data = await response.json();

        const formattedPhotos = data?.photos?.map((photo) => {
          const {
            id,
            img_src,
            earth_date,
            camera: { name: cameraName, full_name: cameraFullName },
            rover: { name: roverName, landing_date, launch_date, status },
          } = photo;

          return {
            id,
            img_src,
            earth_date,
            cameraName,
            cameraFullName,
            roverName,
            landing_date,
            launch_date,
            status,
          };
        });

        setPhotoData(formattedPhotos);
        //console.log(data.photos);
        //alert(data.photos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="my-4">
        <h4 className="mb-3">This is a News component.</h4>
        <div className="row">
          {photoData?.length > 0 ? (
            photoData.map(
              ({
                id,
                img_src,
                earth_date,
                cameraName,
                cameraFullName,
                roverName,
                landing_date,
                launch_date,
                status,
              }) => (
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={id}>
                  <div className="card">
                    <img
                      className="img-fluid"
                      src={img_src}
                      alt={`Mars Rover - ${roverName}`}
                    />
                    <div className="card-body">
                      <h6 className="card-title">
                        <strong>Earth Date:</strong> {earth_date}
                      </h6>
                      <p className="card-text">
                        <strong>Camera:</strong> {cameraName} - {cameraFullName}
                      </p>
                      <p className="card-text">
                        <strong>Rover:</strong> {roverName} (Status: {status})
                      </p>
                      <p className="card-text">
                        <strong>Landing Date:</strong> {landing_date} |{" "}
                        <strong>Launch Date:</strong> {launch_date}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <div className="text-center"><p>Loading... Please Wait</p></div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsNew;
