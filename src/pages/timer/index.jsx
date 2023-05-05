import React, { useEffect, useState } from "react";
import { MainNavigation } from "@/components/main-nav";

function CountdownTimer() {
  const eventDate = new Date("2023-06-01T00:00:00");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(
      (difference / (1000 * 60 * 60 * 24 * 30.44)) % 12
    );
    const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30.44);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { years, months, days, hours, minutes, seconds };
  }

  function formatTimeRemaining() {
    const { years, months, days, hours, minutes, seconds } = timeRemaining;

    const formattedYears = years.toString().padStart(2, "0");
    const formattedMonths = months.toString().padStart(2, "0");
    const formattedDays = days.toString().padStart(2, "0");
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return {
      dmy: `${formattedDays}:${formattedMonths}:${formattedYears}`,
      dms: `${formattedDays}:${formattedMinutes}:${formattedSeconds}`,
    };
  }

  const { dmy, dms } = formatTimeRemaining();

  return (
    <>
      <MainNavigation />
      <div className="mt-5 flex flex-col items-center justify-center">
        <div className="flex space-x-2">
          <div className="rounded-md bg-gray-800 p-4 text-white">
            <div className="text-4xl font-bold">{timeRemaining.years}</div>
            <div className="text-sm uppercase">years</div>
          </div>
          <div className="rounded-md bg-gray-800 p-4 text-white">
            <div className="text-4xl font-bold">{timeRemaining.months}</div>
            <div className="text-sm uppercase">months</div>
          </div>
          <div className="rounded-md bg-gray-800 p-4 text-white">
            <div className="text-4xl font-bold">{timeRemaining.days}</div>
            <div className="text-sm uppercase">days</div>
          </div>
          <div className="rounded-md bg-gray-800 p-4 text-white">
            <div className="text-4xl font-bold">{timeRemaining.hours}</div>
            <div className="text-sm uppercase">hours</div>
          </div>
          <div className="rounded-md bg-gray-800 p-4 text-white">
            <div className="text-4xl font-bold">{timeRemaining.minutes}</div>
            <div className="text-sm uppercase">minutes</div>
          </div>
          <div className="rounded-md bg-gray-800 p-4 text-white">
            <div className="text-4xl font-bold">{timeRemaining.seconds}</div>
            <div className="text-sm uppercase">seconds</div>
          </div>
        </div>
        <div className="mt-4 text-lg">
          <div className="mb-2">DD:MM:YY format: {dmy}</div>
          <div>DD:Min:Sec format: {dms}</div>
        </div>
      </div>
    </>
  );
}

export default CountdownTimer;
