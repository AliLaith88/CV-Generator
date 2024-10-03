import Education from "./Education.jsx";
import Language from "./Language.jsx";
import Experience from "./Experience.jsx";
import General from "./General.jsx";
function SideForm({ data, setData, image, setImage }) {
  return (
    <div className="bg-white w-full max-w-lg p-8">
      <General
        setData={setData}
        data={data}
        image={image}
        setImage={setImage}
      />
      <Education setData={setData} data={data} />
      <Language setData={setData} data={data} />
      <Experience setData={setData} data={data} />
    </div>
  );
}

export default SideForm;
