import React, { useState } from "react";

const TimeElapsedCalculator = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [elapsedTime, setElapsedTime] = useState("");

  // Fonction pour calculer le temps écoulé entre deux dates
  const calculateElapsedTime = () => {
    const startTime = new Date(startDate);
    const endTime = new Date(endDate);

    // Vérifier si les dates sont valides
    if (isNaN(startTime) || isNaN(endTime)) {
      setElapsedTime("Veuillez saisir des dates valides.");
    } else {
      const timeDifference = endTime - startTime;
      const millisecondsInOneSecond = 1000;
      const millisecondsInOneMinute = 60 * millisecondsInOneSecond;
      const millisecondsInOneHour = 60 * millisecondsInOneMinute;
      const millisecondsInOneDay = 24 * millisecondsInOneHour;

      const days = Math.floor(timeDifference / millisecondsInOneDay);
      const hours = Math.floor((timeDifference % millisecondsInOneDay) / millisecondsInOneHour);
      const minutes = Math.floor((timeDifference % millisecondsInOneHour) / millisecondsInOneMinute);
      const seconds = Math.floor((timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond);

      setElapsedTime(`${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes`);
    }
  };

  // Gérer les changements de date
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  // Gérer la soumission du formulaire pour calculer le temps écoulé
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateElapsedTime();
  };

  return (
    <div>
      <h2>Calculateur du temps écoulé</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date de début :
          <input type="datetime-local" value={startDate} onChange={handleStartDateChange} />
        </label>
        <label>
          Date de fin :
          <input type="datetime-local" value={endDate} onChange={handleEndDateChange} />
        </label>
        <button type="submit">Calculer</button>
      </form>
      {elapsedTime && <div>Temps écoulé : {elapsedTime}</div>}
    </div>
  );
};

export default TimeElapsedCalculator;
