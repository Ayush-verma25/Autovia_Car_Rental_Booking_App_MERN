import { useEffect, useRef, useState } from "react";
import Title from "../../components/owner/Title";
import { assets } from "../../assets/assets";

const Addcar = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [imagePreview, setImagePreview] = useState(null);
  const previewUrlRef = useRef(null);
  const [car, setCar] = useState({
    brand: "",
    model: "",
    year: "",
    pricePerDay: "",
    category: "",
    transmission: "",
    fuel_type: "",
    seating_capacity: 0,
    location: "",
    description: "",
  });

  useEffect(
    () => () => {
      if (previewUrlRef.current) {
        URL.revokeObjectURL(previewUrlRef.current);
      }
    },
    [],
  );

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;

    if (previewUrlRef.current) {
      URL.revokeObjectURL(previewUrlRef.current);
    }

    previewUrlRef.current = URL.createObjectURL(file);
    setImagePreview(previewUrlRef.current);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add New Car"
        subTitle="Fill in details to list a new car for booking, including pricing, availability, and car specifications."
      />

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
      >
        {/* Car Image */}
        <div className="flex items-center gap-2 w-full">
          <label
            htmlFor="car-image"
            className="relative focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-primary"
          >
            <img
              src={imagePreview || assets.upload_icon}
              alt=""
              className="h-14 rounded cursor-pointer"
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              className="sr-only"
              aria-labelledby="car-image-label"
              onChange={handleImageChange}
            />
          </label>
          <p id="car-image-label" className="text-sm text-gray-500">
            Upload a picture of your car.
          </p>
        </div>

        {/* Car brand and model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="brand">Brand</label>
            <input
              id="brand"
              type="text"
              placeholder="e.g. BMW, Mercedes, Audi..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.brand}
              onChange={(e) => setCar({ ...car, brand: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="model">Model</label>
            <input
              id="model"
              type="text"
              placeholder="e.g. X5, E-Class, M4..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.model}
              onChange={(e) => setCar({ ...car, model: e.target.value })}
            />
          </div>
        </div>

        {/* Car year, price, and category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="year">Year</label>
            <input
              id="year"
              type="number"
              min="1886"
              step="1"
              placeholder="e.g. 2022, 2023, 2024...."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.year}
              onChange={(e) => setCar({ ...car, year: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="pricePerDay">Daily Price ({currency})</label>
            <input
              id="pricePerDay"
              type="number"
              min="0.01"
              step="0.01"
              placeholder="e.g. $100...."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.pricePerDay}
              onChange={(e) => setCar({ ...car, pricePerDay: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-full">
            <label>Category</label>
            <select
              id="category"
              required
              onChange={(e) => setCar({ ...car, category: e.target.value })}
              value={car.category}
              className="px-3 py-2 border border-borderColor rounded-md outline-none"
            >
              <option value="">Select a category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
              <option value="Crossover">Crossover</option>
              <option value="Hatchback">Hatchback</option>
              <option value="4x4">4x4</option>
            </select>
          </div>
        </div>

        {/* Car transmission, fuel type, and seating capacity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label htmlFor="transmission">Transmission</label>
            <select
              id="transmission"
              required
              onChange={(e) => setCar({ ...car, transmission: e.target.value })}
              value={car.transmission}
              className="px-3 py-2 border border-borderColor rounded-md outline-none"
            >
              <option value="">Select a Transmission</option>
              <option value="Manual">Manual</option>
              <option value="CVT">CVT</option>
              <option value="Automatic">Automatic</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="fuel_type">Fuel Type</label>
            <select
              id="fuel_type"
              required
              onChange={(e) => setCar({ ...car, fuel_type: e.target.value })}
              value={car.fuel_type}
              className="px-3 py-2 border border-borderColor rounded-md outline-none"
            >
              <option value="">Select a Fuel Type</option>
              <option value="LPG/CNG">LPG/CNG</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
              <option value="EV">EV</option>
            </select>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="seating_capacity">Seating Capacity</label>
            <input
              id="seating_capacity"
              type="number"
              min="1"
              step="1"
              placeholder="e.g. 4, 6, 8..."
              required
              className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
              value={car.seating_capacity}
              onChange={(e) =>
                setCar({ ...car, seating_capacity: e.target.value })
              }
            />
          </div>
        </div>

        {/* Car Location */}
        <div className="flex flex-col w-full">
          <label htmlFor="location">Location</label>
          <select
            id="location"
            required
            onChange={(e) => setCar({ ...car, location: e.target.value })}
            value={car.location}
            className="px-3 py-2 border border-borderColor rounded-md outline-none"
          >
            <option value="">Select a location</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Houston">Houston</option>
            <option value="Chicago">Chicago</option>
          </select>
        </div>

        {/* Car Description */}
        <div className="flex flex-col w-full">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            placeholder="e.g. a Luxurious SUV with a spacious interior and powerfull engine."
            required
            className="px-3 py-2 mt-1 border border-borderColor rounded-md outline-none"
            value={car.description}
            onChange={(e) => setCar({ ...car, description: e.target.value })}
          ></textarea>
        </div>

        <p>Listing creation is currently unavailable.</p>
        <button
          type="submit"
          disabled
          className="px-4 py-2.5 bg-primary text-white rounded-md font-medium w-max opacity-50 cursor-not-allowed"
        >
          List Your Car
        </button>
      </form>
    </div>
  );
};

export default Addcar;