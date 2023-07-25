import React, { useState } from "react";
import moment from "moment";
import "moment/locale/pl"; // Import the Polish locale data

const MonthView = ({
  setChosenService,
  chosenService,
}: {
  setChosenService: Function;
  chosenService: any;
}) => {
  moment.locale("pl");
  const startDate = moment().add(2, "days");

  // Create an array of weeks and days to display
  const weeks = [];
  let currentDate = startDate.clone();
  for (let week = 1; week <= 4; week++) {
    const days = [];
    const monthName = currentDate.format("MMMM");

    for (let day = 0; day < 7; day++) {
      days.push(currentDate.format("DD dddd"));
      currentDate.add(1, "day");
    }

    weeks.push({ monthName, days });
  }

  const [hoveredMonth, setHoveredMonth] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (month: any) => {
    setHoveredMonth(month);
  };

  const handleMouseLeave = () => {
    setHoveredMonth(null);
  };

  const handleMouseMove = (e: any) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {weeks.map((weekData, weekIndex) => (
        <div key={weekIndex}>
          <p className="my-2 text-3xl">{weekData.monthName}</p>
          <div className="flex flex-row flex-wrap gap-2">
            {weekData.days.map((day, dayIndex) => (
              <button
                onClick={() => setChosenService(day, weekData.monthName)}
                className={`${
                  (
                    chosenService.time.month + chosenService.time.day
                  ).toString() === (weekData.monthName + day).toString()
                    ? "border-white"
                    : "border-rose-400"
                } bg-rose-400 p-3 rounded-md border-2  hover:border-white`}
                key={dayIndex}
                onMouseEnter={() => handleMouseEnter(weekData.monthName)}
                onMouseLeave={handleMouseLeave}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      ))}

      {hoveredMonth && (
        <div
          className="text-black hidden sm:block"
          style={{
            position: "fixed",
            left: tooltipPosition.x - 50,
            top: tooltipPosition.y - 50,
            background: "#fff",
            padding: "5px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            zIndex: 9999,
          }}
        >
          <p>{hoveredMonth}</p>
        </div>
      )}
    </div>
  );
};

export default MonthView;
