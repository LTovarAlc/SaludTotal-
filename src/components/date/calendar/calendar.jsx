import "./calendar.css";
import React, { useState, useEffect } from "react";

const Calendar = ({darkMode}) => {
  const [currentMonth, setCurrentMonth] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    // Función para obtener el nombre del mes actual
    const getCurrentMonth = () => {
      const months = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ];
      const currentDate = new Date();
      const monthIndex = currentDate.getMonth();
      return months[monthIndex];
    };

    // Función para obtener el año actual
    const getCurrentYear = () => {
      const currentDate = new Date();
      return currentDate.getFullYear();
    };

    // Función para obtener el último día del mes actual
    const getLastDayOfMonth = () => {
      const currentDate = new Date(currentYear, new Date().getMonth(), 1);
      const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
      return lastDay.getDate();
    };

    // Función para obtener el día de la semana en que comienza el mes
    const getFirstDayOfWeek = () => {
      const currentDate = new Date(currentYear, new Date().getMonth(), 1);
      return currentDate.getDay(); // 0 para domingo, 1 para lunes, etc.
    };

    // Función para obtener el día actual
    const getCurrentDay = () => {
      const currentDate = new Date();
      return currentDate.getDate();
    };

    setCurrentMonth(getCurrentMonth());
    setCurrentYear(getCurrentYear());

    const days = Array.from({ length: getLastDayOfMonth() }, (_, i) => i + 1);
    const firstDayOfWeek = getFirstDayOfWeek();
    // Ajustar el inicio del mes según el día de la semana en que comienza
    const adjustedDays = [...Array(firstDayOfWeek).fill(null), ...days];
    setDaysInMonth(adjustedDays);
    setCurrentDay(getCurrentDay());
  }, [currentYear]);

  return (
    <div className="calendar">
      <h1>
        {currentMonth} {currentYear}
      </h1>
      <ol className={darkMode ? "ol-dark" : ""}>
        <li className="day-name">Dom</li>
        <li className="day-name">Lun</li>
        <li className="day-name">Mar</li>
        <li className="day-name">Mie</li>
        <li className="day-name">Jue</li>
        <li className="day-name">Vie</li>
        <li className="day-name">Sáb</li>

        {daysInMonth.map((day, index) => (
          <li key={index} className={day ? "day-number" : "empty-day"} style={index % 7 === 0 ? { backgroundColor: "#fa9191" } : (day === currentDay ? { backgroundColor: "#62d6cb" } : null)}>{day}</li>
        ))}
      </ol>
    </div>
  );
};

export default Calendar;
