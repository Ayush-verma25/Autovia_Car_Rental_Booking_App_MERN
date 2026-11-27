import React, { useEffect, useRef, useState } from "react";
import { assets, dummyUserData, ownerMenuLinks } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const user = dummyUserData;
  const [image, setImage] = useState(null);
  const [profileImage, setProfileImage] = useState(user?.image);
  const [previewUrl, setPreviewUrl] = useState(null);
  const previewImageUrl = useRef(null);
  const savedImageUrl = useRef(null);

  useEffect(
    () => () => {
      if (previewImageUrl.current) {
        URL.revokeObjectURL(previewImageUrl.current);
      }
      if (savedImageUrl.current) {
        URL.revokeObjectURL(savedImageUrl.current);
      }
    },
    [],
  );

  const updateImage = () => {
    if (!image) return;

    const url = URL.createObjectURL(image);
    if (savedImageUrl.current) {
      URL.revokeObjectURL(savedImageUrl.current);
    }
    savedImageUrl.current = url;
    setProfileImage(url);
    if (previewImageUrl.current) {
      URL.revokeObjectURL(previewImageUrl.current);
      previewImageUrl.current = null;
    }
    setPreviewUrl(null);
    setImage(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;

    if (previewImageUrl.current) {
      URL.revokeObjectURL(previewImageUrl.current);
    }
    previewImageUrl.current = URL.createObjectURL(file);
    setPreviewUrl(previewImageUrl.current);
    setImage(file);
  };

  return (
    <div className="relative min-h-screen md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-borderColor text-sm">
      <div className="group relative">
        <label htmlFor="image">
          <input
            type="file"
            id="image"
            accept="image/*"
            className="peer sr-only"
            aria-label="Change profile image"
            onChange={handleImageChange}
          />
          <img
            src={
              previewUrl ||
              profileImage ||
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300"
            }
            alt={`${user?.name || "Owner"} profile`}
            className="h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary"
          />

          <div className="absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center cursor-pointer">
            <img src={assets.edit_icon} alt="" />
          </div>
        </label>
      </div>
      {image && (
        <button
          type="button"
          onClick={updateImage}
          className="absolute top-0 right-0 flex p-2 gap-1 bg-primary/10 text-primary cursor-pointer"
        >
          Save
          <img src={assets.check_icon} width={13} alt="" />
        </button>
      )}
      <p className="mt-2 text-base max-md:hidden">{user?.name || "Owner"}</p>

      <div className="w-full">
        {ownerMenuLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/owner"}
            className={({ isActive }) =>
              `relative flex items-center gap-2 w-full py-3 pl-4 first:mt-6 ${isActive ? "bg-primary/10 text-primary" : "text-gray-600"}`
            }
          >
            {({ isActive }) => (
              <>
                <img src={isActive ? link.coloredIcon : link.icon} alt="" />
                <span className="sr-only md:not-sr-only">{link.name}</span>

                <div
                  className={`${isActive ? "bg-primary" : ""} w-1.5 rounded-l right-0 absolute`}
                ></div>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
