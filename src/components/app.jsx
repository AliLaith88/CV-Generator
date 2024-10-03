import { useState } from "react";
import Cv from "./cv.jsx";
import SideForm from "./sideForm.jsx";

function App() {
  let [data, setData] = useState({
    name: "john Doemogan",
    jobTitle: "FrontEnd",
    mail: "johnDoe@eth.com",
    phone: "123-134-222",
    profile:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    education: [
      {
        study: "computer science",
        university: "oxford university",
        date: "2021 - 2023",
      },
      {
        study: "UI design",
        university: "oxford university",
        date: "2014 - 2017",
      },
    ],
    language: ["Arabic", "spanish", "English", "Turkish"],
    experience: [
      {
        company: "Krit Co.",
        position: "Senior Software Engineer",
        dateStart: "2020",
        dateEnd: "2022",
        task: "Led the development of scalable web applications, managing a team of 5 engineers. conducting code reviews and knowledge-sharing sessions.",
      },
      {
        company: "Kalamari Co.",
        position: "Marketing Coordinator",
        dateStart: "2020",
        dateEnd: "2022",
        task: "Developed and d content teams to create promotional materials. Monitored performance analytics and adjusted strategies to meet KPIs. Organized and promoted company events, boosting customer engagement.",
      },
      {
        company: "SAF Co.",
        position: "Project Manager",
        dateStart: "2020",
        dateEnd: "2022",
        task: "Oversaw multiple project timelines, budgets, s to streamline team collaboration and efficiency. Managed risk and resolved project issues proactively.",
      },
    ],
  });
  const [image, setImage] = useState(null);
  return (
    <div className="flex justify-around">
      <SideForm
        setData={setData}
        data={data}
        image={image}
        setImage={setImage}
      />
      <Cv dataObj={data} image={image} />
    </div>
  );
}

export default App;
