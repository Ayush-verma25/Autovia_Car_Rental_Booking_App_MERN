import { assets, dummyCarData } from "../../assets/assets";
import Title from "../../components/owner/Title";

const ManageCars = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const cars = dummyCarData;

  return (
    <div className="min-w-0 flex-1 px-4 py-10 md:px-10">
      <Title
        title="Manage Cars"
        subTitle="Review your listed cars and check their availability."
      />

      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6">
        <table className="w-full border-collapse text-left text-sm text-gray-600">
          <thead>
            <tr>
              <th className="p-3 font-medium">Car</th>
              <th className="p-3 font-medium max-md:hidden">Category</th>
              <th className="p-3 font-medium">Price</th>
              <th className="p-3 font-medium max-md:hidden">Status</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car._id} className="border-t border-borderColor">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={car.image}
                    alt=""
                    className="h-12 w-12 aspect-square rounded-md object-cover"
                  />

                  <div className="max-md:sr-only">
                    <p className="font-medium">
                      {car.brand} {car.model}
                    </p>
                    <p className="text-xs text-gray-500 max-md:hidden">
                      {car.seating_capacity} • {car.transmission}
                    </p>
                  </div>
                </td>

                <td className="p-3 max-md:hidden">{car.category}</td>
                <td className="p-3">
                  {currency}
                  {car.pricePerDay}/day
                </td>

                <td className="p-3 max-md:hidden">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${car.isAvaliable ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500"}`}
                  >
                    {car.isAvaliable ? "Available" : "Unavailable"}
                  </span>
                </td>

                <td className="flex items-center p-3">
                  <img
                    src={
                      car.isAvaliable ? assets.eye_close_icon : assets.eye_icon
                    }
                    alt=""
                  />
                  <img src={assets.delete_icon} alt="" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCars;
