import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseComponent = () => {
  const [answers, setAnswers] = useState({}); // Use empty object to track answers for each phase
  const [errors, setErrors] = useState({});
  const [completedPhases, setCompletedPhases] = useState({}); // Track completion of each phase

 const correctAnswers = {
   // Environmental Science phase
   question1: "a",
   question2: "a",


 };
  const handleChange = (e, phaseIndex) => {
    const phaseAnswers = answers[phaseIndex] || {}; // Get phase-specific answers
    const updatedAnswers = {
      ...answers,
      [phaseIndex]: { ...phaseAnswers, [e.target.name]: e.target.value },
    };
    setAnswers(updatedAnswers);
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (phaseIndex) => {
    let validationErrors = {};
    const phaseAnswers = answers[phaseIndex] || {};

    if (!phaseAnswers.question1)
      validationErrors.question1 = "This field is required.";
    if (!phaseAnswers.question2)
      validationErrors.question2 = "This field is required.";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Mark phase as complete regardless of the specific answers
    setCompletedPhases((prev) => ({ ...prev, [phaseIndex]: true }));
     toast.success("Your answers have been submitted successfully.");
  };


  const allPhasesCompleted =
    Object.keys(completedPhases).length === 5 &&
    Object.values(completedPhases).every(Boolean);

    const course_handleSubmit = async (e) => {
      e.preventDefault();

      // Data to be sent in the API request
      const user_id = sessionStorage.getItem("user_id");
      const data = {
        user_id: user_id,
        course: "Environmental Science",
      };

      try {
        // Replace this URL with your actual API endpoint
        const response = await fetch("http://localhost:5000/api/submit", {
          method: "POST", // Method for API call
          headers: {
            "Content-Type": "application/json", // Ensure we send JSON data
          },
          body: JSON.stringify(data), // Convert data to JSON string
        });

        if (response.ok) {
          const responseData = await response.json(); // Parse the response data
          console.log("Data submitted successfully:", responseData);
        } else {
          console.error("Failed to submit data:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    };

  return (
    <div className="bg-gradient-to-r from-transparent via-black to-black text-white p-6">
      {/* Header Section */}
      <header className="text-center mb-8">
        <nav className="text-sm text-gray-400 mb-4">
          <a href="/" className="hover:underline">
            All Courses
          </a>{" "}
          &gt; <span className="text-green-400">Live</span>
        </nav>
        <h1 className="text-5xl font-extrabold mb-6">Environmental Science</h1>
        <h2 className="text-3xl font-bold mb-4">A Complete Guide</h2>
        <p className="mb-6 text-green-400 text-lg">
          Recommended for Students and Working Professionals
        </p>
      </header>

      {/* Course Description */}
      <section className="bg-transparent p-6 rounded flex flex-col lg:flex-row items-center lg:items-start my-12">
        <div className="flex-grow w-full lg:w-2/3">
          <h3 className="text-2xl font-bold mb-4">Course Description</h3>
          <p className="mb-4">
            This course offers an in-depth exploration of Environmental Science,
            guiding you through the complexities of the natural world and human
            impact on the environment. From understanding ecological principles
            to addressing the challenges of climate change and sustainability,
            this course equips you with the knowledge and tools necessary to
            become an advocate for environmental protection. Whether you're
            looking to build a foundational understanding or delve into advanced
            environmental studies, this course is designed to support your
            journey toward making a positive impact on the planet.
          </p>
          <p className="text-green-400 font-semibold mb-4">
            Beginner to Advance
          </p>
        </div>
      </section>

      {/* Phases Section */}
      {[
        "Environmental Science",
        "Renewable Energy",
        "Waste Management",
        "Water Conservation",
        "Soil Conservation",
      ].map((phase, index) => (
        <section
          key={index}
          className="flex flex-col lg:flex-row items-center justify-between bg-transparent p-6 rounded mb-8"
        >
          <div className="text-center lg:text-left flex flex-col justify-between h-full lg:w-2/3">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Phase {index + 1} - {phase} Information:
              </h3>
              <ul className="space-y-2">
                <li>📤 Submit Your Answer</li>
                <li>✔ Answer Will Be Verified</li>
              </ul>
              <p className="mt-4">
                {/* Description for each phase goes here */}
                {phase === "Environmental Science" &&
                  "Waste management focuses on reducing, reusing, and recycling waste to minimize its impact on the environment. It involves the systematic handling of different types of waste, including solid, liquid, hazardous, and electronic waste, ensuring safe and sustainable disposal. Proper waste segregation and disposal methods, such as landfills, incineration, and composting, are critical for managing waste effectively. By reducing pollution and conserving natural resources, waste management plays a vital role in combating climate change and protecting ecosystems. Emerging technologies, such as waste-to-energy systems and advanced recycling techniques, are enhancing efficiency and creating sustainable solutions for managing waste at a larger scale."}

                {phase === "Renewable Energy" &&
                  "Renewable energy focuses on harnessing natural and sustainable energy sources such as wind, solar, geothermal, and hydropower. These energy resources are replenished naturally and have minimal environmental impact compared to fossil fuels. Solar power captures energy from the sun through photovoltaic cells, while wind turbines convert wind into electricity. Geothermal energy utilizes heat from beneath the Earth's surface for power generation and heating. Hydropower generates energy by harnessing the flow of water in rivers or dams. The adoption of renewable energy is crucial for reducing greenhouse gas emissions, combating climate change, and creating a sustainable energy future. Emerging innovations like battery storage and smart grids are further enhancing the efficiency and integration of renewable energy systems."}

                {phase === "Waste Management" &&
                  "Waste management involves strategies and processes aimed at minimizing waste generation, promoting recycling, and ensuring the proper disposal of waste. It focuses on reducing the environmental impact of waste through practices such as composting organic material, recycling plastics, metals, and paper, and converting waste into energy. Proper waste segregation is essential for efficient recycling and reducing landfill usage. Advanced waste management techniques include the use of bioreactors, incineration for energy recovery, and anaerobic digestion to process organic waste. By adopting sustainable practices, waste management contributes to conserving natural resources, reducing pollution, and fostering a cleaner and healthier environment."}

                {phase === "Water Conservation" &&
                  "Water conservation emphasizes the efficient use and management of water resources to ensure their sustainability for future generations. It involves strategies such as reducing water wastage, repairing leaks, and adopting water-saving technologies like low-flow fixtures and smart irrigation systems. Rainwater harvesting and groundwater recharge are critical techniques for enhancing water availability. Educational campaigns promote awareness about the importance of conserving water in daily activities, including limiting excessive usage in households, agriculture, and industries. By protecting freshwater sources and reducing water pollution, conservation efforts help maintain ecological balance and meet the needs of growing populations and changing climates."}

                {phase === "Soil Conservation" &&
                  "Soil conservation focuses on protecting and maintaining the quality of soil to ensure its long-term productivity and sustainability. It includes techniques to prevent soil erosion, such as contour farming, terracing, and the use of cover crops. Practices like crop rotation and agroforestry help retain nutrients and organic matter, improving soil health. Managing water runoff and reducing deforestation are essential to minimizing soil degradation. Soil conservation also involves combating desertification and restoring degraded land through reforestation and sustainable land-use planning. These efforts are vital for supporting agriculture, preserving biodiversity, and combating the impacts of climate change."}
              </p>
            </div>

            <div className="mt-6">
              {/* Question 1 */}
              <div className="mb-4">
                <label htmlFor="question1" className="block text-white mb-2">
                  Question 1: {`Question related to ${phase} (Placeholder)`}
                </label>
                <input
                  type="text"
                  id="question1"
                  name="question1"
                  value={answers[index]?.question1 || ""}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full p-2 border border-white bg-transparent focus:border-green-500 hover:border-green-400 rounded"
                />
                {errors.question1 && (
                  <p className="text-red-500 text-sm">{errors.question1}</p>
                )}
              </div>

              {/* Question 2 */}
              <div className="mb-4">
                <label htmlFor="question2" className="block text-white mb-2">
                  Question 2: {`Question related to ${phase} (Placeholder)`}
                </label>
                <input
                  type="text"
                  id="question2"
                  name="question2"
                  value={answers[index]?.question2 || ""}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full p-2 border border-white bg-transparent focus:border-green-500 hover:border-green-400 rounded"
                />
                {errors.question2 && (
                  <p className="text-red-500 text-sm">{errors.question2}</p>
                )}
              </div>

              <button
                onClick={() => handleSubmit(index)}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
              >
                Complete
              </button>
            </div>
          </div>

          {/* Phase Status */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center lg:items-start ml-[-2rem]">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={completedPhases[index] || false} // Check individual phase completion
                readOnly
                className="w-5 h-5 text-green-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-white">Phase Complete</label>
            </div>
          </div>
        </section>
      ))}

      {/* Submit Button */}
      <button
        onSubmit={course_handleSubmit}
        disabled={!allPhasesCompleted}
        className={`bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors ${
          !allPhasesCompleted ? "cursor-not-allowed opacity-50" : ""
        }`}
      >
        Submit
      </button>
      <ToastContainer />
    </div>
  );
};

export default CourseComponent;
