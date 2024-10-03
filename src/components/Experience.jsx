import { useState } from "react";
import editLogo from "../assets/edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";

function Experience({ data, setData }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(null);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [newExperience, setNewExperience] = useState({
    company: "corsiev Co.",
    position: "app developer",
    dateStart: "2020",
    dateEnd: "2022",
    task: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  });
  function toggleMenu() {
    setMenuIsOpen((m) => !m);
  }

  function positionChange(event) {
    setNewExperience((prevExp) => ({
      ...prevExp,
      position: event.target.value,
    }));
  }
  function companyChange(event) {
    setNewExperience((prevExp) => ({
      ...prevExp,
      company: event.target.value,
    }));
  }
  function dateStartChange(event) {
    setNewExperience((prevExp) => ({
      ...prevExp,
      dateStart: event.target.value,
    }));
  }
  function dateEndChange(event) {
    setNewExperience((prevExp) => ({
      ...prevExp,
      dateEnd: event.target.value,
    }));
  }
  function handleTaskChange(e) {
    setNewExperience((prevExp) => ({
      ...prevExp,
      task: e.target.value,
    }));
  }

  function handleDeleteExperience(index) {
    setData({
      ...data,
      experience: data.experience.filter((_, i) => i !== index),
    });
  }

  function toggleEdit(index) {
    setEditIsOpen((m) => !m);
    setCurrentEditIndex(index);
    setNewExperience({
      company: data.experience[index].company,
      position: data.experience[index].position,
      dateStart: data.experience[index].dateStart,
      dateEnd: data.experience[index].dateEnd,
      task: data.experience[index].task,
    });
  }

  function handleSubmitEdit() {
    setData((prevData) => {
      const updatedExperience = [
        ...prevData.experience.slice(0, currentEditIndex), // Copy elements before the index
        newExperience, // Replace the element at currentEditIndex
        ...prevData.experience.slice(currentEditIndex + 1), // Copy elements after the index
      ];

      return {
        ...prevData,
        experience: updatedExperience,
      };
    });
  }

  function handleAddExperience() {
    setData({ ...data, experience: [...data.experience, newExperience] });
    document.querySelector("#taskInput").value = "";
    document.querySelector("#dateEndInput").value = "";
    document.querySelector("#dateStartInput").value = "";
    document.querySelector("#positionInput").value = "";
    document.querySelector("#companyInput").value = "";
  }

  return (
    <>
      <div
        id="parent"
        className="w-full bg-gray-200 rounded-lg p-2 flex justify-between"
      >
        <p className="font-bold text-lg">Experience</p>
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
          <h2 className="font-medium text-base">List Of Experience</h2>
          <ul>
            {data.experience.map((element, index) => {
              return (
                <li key={index} className="mb-8 bg-gray-300 p-2">
                  <p>{element.company}</p>
                  <p>{element.position}</p>

                  <button
                    className="bg-red-600 mt-2 px-2 py-1 rounded-lg text-white hover:bg-red-400 mr-2"
                    onClick={() => handleDeleteExperience(index)}
                  >
                    delete
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
            <div className="flex flex-col ">
              <label htmlFor="companyEditInput">Company:</label>
              <input
                type="text"
                id="companyEditInput"
                className="rounded-lg p-2 mb-2"
                value={newExperience.company}
                onChange={companyChange}
              />
              <label htmlFor="positionEditInput">Job Title:</label>
              <input
                type="text"
                id="positionEditInput"
                className="rounded-lg p-2 mb-2"
                value={newExperience.position}
                onChange={positionChange}
              />
              <label htmlFor="dateStartEditInput">Date Start:</label>
              <input
                type="number"
                id="dateStartEditInput"
                className="rounded-lg p-2 mb-2"
                value={newExperience.dateStart}
                onChange={dateStartChange}
              />
              <label htmlFor="dateEndEditInput">Date End:</label>
              <input
                type="number"
                id="dateEndEditInput"
                className="rounded-lg p-2 mb-2"
                value={newExperience.dateEnd}
                onChange={dateEndChange}
              />
              <label htmlFor="taskEditInput">Job Describtion:</label>
              <textarea
                id="taskEditInput"
                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusamus quam magni fugiat voluptas perspiciatis reiciendis, voluptatem dolorem veniam aperiam, ratione architecto itaque sunt quas eos necessitatibus, nesciunt enim quidem."
                className="rounded-lg mb-2rounded-lg p-2 mb-2 min-h-48 resize-none"
                value={newExperience.task}
                onChange={handleTaskChange}
              />
              <button
                onClick={handleSubmitEdit}
                className="bg-green-600 px-2 py-1 rounded-lg text-white hover:bg-green-400"
              >
                Submit Edit
              </button>
            </div>
          )}
          <label htmlFor="companyInput">Company:</label>
          <input
            type="text"
            id="companyInput"
            className="rounded-lg p-2 mb-2"
            placeholder="Zax Co."
            onChange={companyChange}
          />
          <label htmlFor="positionInput">Job Title:</label>
          <input
            type="text"
            id="positionInput"
            className="rounded-lg p-2 mb-2"
            placeholder="Front End Developer"
            onChange={positionChange}
          />
          <label htmlFor="dateStartInput">Date Start:</label>
          <input
            type="number"
            id="dateStartInput"
            className="rounded-lg p-2 mb-2"
            placeholder="2020"
            onChange={dateStartChange}
          />
          <label htmlFor="dateEndInput">Date End:</label>
          <input
            type="number"
            id="dateEndInput"
            className="rounded-lg p-2 mb-2"
            placeholder="2030"
            onChange={dateEndChange}
          />
          <label htmlFor="taskInput">Job Describtion:</label>
          <textarea
            id="taskInput"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate accusamus quam magni fugiat voluptas perspiciatis reiciendis, voluptatem dolorem veniam aperiam, ratione architecto itaque sunt quas eos necessitatibus, nesciunt enim quidem."
            className="rounded-lg mb-2rounded-lg p-2 mb-2 min-h-48 resize-none"
            onChange={handleTaskChange}
          />
          <button
            onClick={handleAddExperience}
            className="bg-green-600 px-2 py-1 rounded-lg text-white hover:bg-green-400"
          >
            Add
          </button>
        </div>
      )}
    </>
  );
}
export default Experience;
