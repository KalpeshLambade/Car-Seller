import React, { useState } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import cars from "../../JSON/cars.json";
import Card from "../Layout/Card";
import { useNavigate } from "react-router-dom";
import Navbar from "../Global/Navbar";

const Home = () => {
  const [active, setActive] = React.useState(1);
  const [filteredCarList, setFilteredCarList] = useState(cars);
  const route = useNavigate();

  const carsPerPage = 6;
  const startIndex = (active - 1) * carsPerPage;
  const next = () => {
    if (active < Math.ceil(filteredCarList.length / carsPerPage)) {
      setActive(active + 1);
    }
  };

  const prev = () => {
    if (active > 1) {
      setActive(active - 1);
    }
  };

  const handleNextClick = (active) => {
    route(`/${active + 1}`);
  };

  const handlePrevClick = (active) => {
    route(`/${active - 1}`);
  };

  const handleSearch = (searchInput) => {
    const filteredCars = cars.filter((car) =>
      car.carName.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredCarList(filteredCars);
    setActive(1);
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <main className="mt-10 w-full min-h-screen flex flex-col items-center justify-center">
        {filteredCarList.length === 0 ? (
          <Typography color="gray" className="font-normal text-center">
            No cars found for the given search.
          </Typography>
        ) : (
          <>
            <div className="w-[95%] rounded-md bg-[#f4f4fd] shadow-2xl flex flex-wrap">
              {filteredCarList?.length &&
                filteredCarList
                  .slice(startIndex, startIndex + carsPerPage)
                  .map((e, i) => (
                    <div className="pb-5" key={i}>
                      <Card
                        name={e.carName}
                        image={e.imageUrl}
                        capacity={e.capacity}
                        fuel={e.fuelType}
                        drive={e.driveMode}
                        date={e.releaseYear}
                        rent={e.carRent}
                      />
                    </div>
                  ))}
            </div>
            <div className="mt-5 mb-10 w-[95%] h-[80px] flex items-center justify-center">
              <div className="flex items-center gap-8">
                <IconButton
                  size="sm"
                  variant="outlined"
                  onClick={prev}
                  disabled={active === 1}
                >
                  <ArrowLeftIcon
                    onClick={() => handlePrevClick(active)}
                    strokeWidth={2}
                    className="h-4 w-4"
                  />
                </IconButton>
                <Typography color="gray" className="font-normal">
                  Page <strong className="text-gray-900">{active}</strong> of{" "}
                  <strong className="text-gray-900">
                    {Math.ceil(filteredCarList.length / carsPerPage)}
                  </strong>
                </Typography>
                <IconButton
                  size="sm"
                  variant="outlined"
                  onClick={next}
                  disabled={
                    active ===
                    Math.ceil(filteredCarList.length / carsPerPage)
                  }
                >
                  <ArrowRightIcon
                    onClick={() => handleNextClick(active)}
                    strokeWidth={2}
                    className="h-4 w-4"
                  />
                </IconButton>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Home;
