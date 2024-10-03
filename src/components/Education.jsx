import { useState } from "react";
import editLogo from "../assets/edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

function Education({ setData, data }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [newEducation, setNewEducation] = useState({
    university: "some uni",
    date: "20XX",
    study: "Computer Science",
  });
  const [currentEditIndex, setCurrentEditIndex] = useState(null);

  function toggleMenu() {
    setMenuIsOpen((m) => !m);
  }

  function universityChange(event) {
    setNewEducation((e) => ({ ...e, university: event.target.value }));
  }
  function dateChange(event) {
    setNewEducation((e) => ({ ...e, date: event.target.value }));
  }
  function studyChange(event) {
    setNewEducation((e) => ({ ...e, study: event.target.value }));
  }
  function handleDelete(index) {
    setData({
      ...data,
      education: data.education.filter((_, i) => i !== index),
    });
  }

  function handleAdd() {
    setData((prevData) => {
      return { ...prevData, education: [...prevData.education, newEducation] };
    });
    document.querySelector("#dateInput").value = "";
    document.querySelector("#universityInput").value = "";
    document.querySelector("#studyInput").value = "";
  }
  function handleEdit() {
    setData((prevData) => {
      const updatedEducation = [
        ...prevData.education.slice(0, currentEditIndex), // Copy elements before the index
        newEducation, // Replace the element at currentEditIndex
        ...prevData.education.slice(currentEditIndex + 1), // Copy elements after the index
      ];

      return {
        ...prevData,
        education: updatedEducation,
      };
    });
  }

  function toggleEdit(index) {
    setEditIsOpen((m) => !m);
    setCurrentEditIndex(index);
    setNewEducation({
      study: data.education[index].study,
      university: data.education[index].university,
      date: data.education[index].date,
    });
  }

  return (
    <>
      <div
        id="parent"
        className="w-full bg-gray-200 rounded-lg p-2 flex justify-between"
      >
        <p className="font-bold text-lg">Education</p>
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
          <h2 className="font-medium text-base">List Of Education</h2>
          <ul>
            {data.education.map((element, index) => {
              return (
                <li key={index} className="mb-8 bg-gray-300 p-2">
                  <p>{element.study}</p>
                  <p>{element.university}</p>
                  <p>{element.date}</p>
                  <button
                    className="bg-red-600 mt-2 px-2 py-1 rounded-lg text-white hover:bg-red-400 mr-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-600 mt-2 px-2 py-1 rounded-lg text-white hover:bg-blue-400"
                    onClick={() => toggleEdit(index)}
                  >
                    Edit
                  </button>
                </li>
              );
            })}
          </ul>
          {editIsOpen && (
            <div>
              <label htmlFor="studyEdit">Study:</label>
              <input
                type="text"
                id="studyEdit"
                placeholder="Computer Science"
                value={newEducation.study}
                onChange={studyChange}
                className="rounded-lg p-2 mb-2"
              />
              <label htmlFor="universityEdit">University:</label>
              <input
                type="text"
                id="universityEdit"
                placeholder="Frejoi university"
                value={newEducation.university}
                onChange={universityChange}
                className="rounded-lg p-2 mb-2"
              />
              <label htmlFor="dateEdit">Date:</label>
              <input
                type="text"
                id="dateEdit"
                className="rounded-lg p-2 mb-2"
                placeholder="2020 - 2022"
                onChange={dateChange}
                value={newEducation.date}
              />
              <button
                className="bg-green-600 px-2 py-1 rounded-lg text-white hover:bg-green-400"
                onClick={handleEdit}
              >
                Submit Edit
              </button>
            </div>
          )}
          <label htmlFor="studyInput">Study:</label>
          <input
            type="text"
            id="studyInput"
            placeholder="Computer Science"
            className="rounded-lg p-2 mb-2"
            onChange={studyChange}
          />
          <label htmlFor="universityInput">University:</label>
          <input
            type="text"
            id="universityInput"
            placeholder="Frejoi university"
            className="rounded-lg p-2 mb-2"
            onChange={universityChange}
          />
          <label htmlFor="dateInput">Date:</label>
          <input
            type="text"
            id="dateInput"
            className="rounded-lg p-2 mb-2"
            placeholder="2020 - 2022"
            onChange={dateChange}
          />
          <button
            className="bg-green-600 px-2 py-1 rounded-lg text-white hover:bg-green-400"
            onClick={() => handleAdd()}
          >
            Add
          </button>
        </div>
      )}
    </>
  );
}
export default Education;
