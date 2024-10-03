import callLogo from "../assets/call_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import emailLogo from "../assets/mail_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import { useRef } from "react";
import html2pdf from "html2pdf.js";
function Cv({ dataObj, image }) {
  const {
    name,
    jobTitle,
    mail,
    phone,
    education,
    language,
    experience,
    profile,
  } = dataObj;

  // Step 1: Create a ref for the CV section
  const cvRef = useRef(null);
  const handleDownload = () => {
    const element = cvRef.current;
    html2pdf()
      .from(element)
      .set({
        margin: 0,
        filename: "my_cv.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      })
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        // This removes the extra blank pages by trimming the PDF document
        pdf.deletePage(pdf.internal.getNumberOfPages());
      })
      .save();
  };
  function educationList() {
    return education.map((element, index) => {
      return (
        <li key={index} className="mb-4">
          <p>{element.study}</p>
          <p>{element.university}</p>
          <p>{element.date}</p>
        </li>
      );
    });
  }

  function languageList() {
    return language.map((element, index) => {
      return <li key={index}>{element}</li>;
    });
  }

  function experienceList() {
    return experience.map((element, index) => {
      return (
        <li key={index} className="mb-6">
          <div>
            <div className="flex justify-between">
              <p className="font-semibold text-lg">{element.company}</p>
              <p>
                {element.dateStart} - {element.dateEnd}
              </p>
            </div>
            <p className="mt-2 text-lg">{element.position}</p>
            <p className="mt-2">{element.task}</p>
          </div>
        </li>
      );
    });
  }

  return (
    <div>
      {/* Step 2: Attach the ref to the CV section */}
      <div
        ref={cvRef}
        className="w-[210mm] max-w-[210mm] max-h-[297mm] h-[297mm] p-8 bg-white overflow-hidden"
      >
        <div>
          <div className="flex justify-around">
            <img
              src={image ? image : "https://placehold.co/200x200"}
              alt="profile image"
              className="rounded-full"
              width={200}
              height={200}
            />
            <div className="self-center">
              <p className="text-5xl">{name}</p>
              <p className="text-2xl mt-4">{jobTitle}</p>
              <div className="flex gap-3 mt-8">
                <img src={emailLogo} alt="" />
                <p>{mail}</p>
              </div>
              <div className="flex gap-3 mt-2">
                <img src={callLogo} alt="" />
                <p>{phone}</p>
              </div>
            </div>
          </div>
        </div>
        {/* border */}
        <div className="border-t-2 my-8 border-gray w-full"></div>
        <div className="flex w-full">
          {/* left section */}
          <div className="  p-2 w-1/3">
            <div>
              <p className="text-lg font-extrabold mb-3">EDUCATION</p>
              <ul>{educationList()}</ul>
            </div>
            <div className="mt-12">
              <p className="text-lg font-extrabold mb-3">LANGUAGE</p>
              <ul>{languageList()}</ul>
            </div>
          </div>
          {/* right section */}
          <div className="py-2 pl-6 w-full">
            <div>
              <p className="text-lg font-extrabold mb-3">PROFILE</p>
              <p>{profile}</p>
            </div>
            <div className="mt-12">
              <p className="text-lg font-extrabold">EXPERIENCE</p>
              <ul className="mt-3">{experienceList()}</ul>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleDownload}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Download as PDF
      </button>
    </div>
  );
}
export default Cv;
