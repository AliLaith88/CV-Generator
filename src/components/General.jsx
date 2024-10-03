import { useState } from "react";
import editLogo from "../assets/edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

function General({ setData, data, setImage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <>
      <div
        id="parent"
        className="w-full bg-gray-200 rounded-lg p-2 flex justify-between"
      >
        <p className="font-bold text-lg">General</p>
        <img
          src={editLogo}
          width={30}
          height={30}
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>
      {isMenuOpen && (
        <div className="w-full flex flex-col bg-gray-200 rounded-b-lg p-2">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            accept="image/*"
            className="rounded-lg p-2 mb-2"
            onChange={handleImageChange}
          />
          <label htmlFor="name">FULL NAME:</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="rounded-lg p-2 mb-2"
            onChange={handleChange}
          />

          <label htmlFor="jobTitle">JOB TITLE:</label>
          <input
            type="text"
            id="jobTitle"
            placeholder="Front End Developer"
            className="rounded-lg p-2 mb-2"
            onChange={handleChange}
          />

          <label htmlFor="mail">MAIL:</label>
          <input
            type="text"
            id="mail"
            placeholder="sfotik@era.com"
            className="rounded-lg p-2 mb-2"
            onChange={handleChange}
          />

          <label htmlFor="phone">PHONE NUMBER:</label>
          <input
            type="tel"
            id="phone"
            placeholder="+856-355-2341"
            className="rounded-lg p-2 mb-2"
            onChange={handleChange}
          />
          <label htmlFor="profile">PROFILE :</label>
          <textarea
            id="profile"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            className="rounded-lg p-2 mb-2 min-h-48 resize-none"
            onChange={handleChange}
          />
        </div>
      )}
    </>
  );
}

export default General;
