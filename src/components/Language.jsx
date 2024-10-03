import { useState } from "react";
import editLogo from "../assets/edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

function Language({ data, setData }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [newLang, setNewLang] = useState("");

  function toggleMenu() {
    setMenuIsOpen((m) => !m);
  }
  function handleDelete(index) {
    setData({ ...data, language: data.language.filter((_, i) => i !== index) });
  }
  function languageChange(e) {
    setNewLang(e.target.value);
  }
  function handleAddNewLang() {
    setData({ ...data, language: [...data.language, newLang] });
    document.querySelector("#languageInput").value = "";
  }
  return (
    <div>
      <div
        id="parent"
        className="w-full bg-gray-200 rounded-lg p-2 flex justify-between"
      >
        <p className="font-bold text-lg">Language</p>
        <img
          src={editLogo}
          width={30}
          height={30}
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </div>
      {menuIsOpen && (
        <div className="w-full flex flex-col bg-gray-200 rounded-b-lg p-2">
          <h2 className="font-medium text-base">List Of Languages</h2>
          <ul>
            {data.language.map((element, index) => {
              return (
                <li key={index} className="mb-2">
                  <p>{element}</p>
                  <button
                    className="bg-red-600 px-2 py-1 rounded-lg text-white hover:bg-red-400"
                    onClick={() => handleDelete(index)}
                  >
                    delete
                  </button>
                </li>
              );
            })}
          </ul>
          <input
            type="text"
            id="languageInput"
            className="rounded-lg p-2 mb-2"
            placeholder="Spanish"
            onChange={languageChange}
          />

          <button
            onClick={() => handleAddNewLang()}
            className="bg-green-600 px-2 py-1 rounded-lg text-white hover:bg-green-400"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}
export default Language;
