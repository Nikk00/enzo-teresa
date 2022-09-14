import { useEffect, useState } from "react";

export default function Count(){

  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("03/11/2023 18:30:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    return(
        <div className="grid grid-cols-4 items-center justify-center gap-4">
              <div className="grid">
                <span className="lg:text-6xl md:text-4xl sm:text-4xl text-4xl text-center font-montSerrat text-black ">{days}</span>
                <span className="lg:text-xl md:text-xl sm:text-lg text-md text-center font-montSerrat text-yellow-500">Días</span>
              </div>
              <div className="grid">
                <span className="lg:text-6xl md:text-4xl sm:text-4xl text-4xl text-center font-montSerrat text-black ">{hours}</span>
                <span className="lg:text-xl md:text-xl sm:text-lg text-md text-center font-montSerrat text-yellow-500">Horas</span>
              </div>
              <div className="grid">
                <span className="lg:text-6xl md:text-4xl sm:text-4xl text-4xl text-center font-montSerrat text-black">{minutes}</span>
                <span className="lg:text-xl md:text-xl sm:text-lg text-md text-center font-montSerrat text-yellow-500">Minutos</span>
              </div>
              <div className="grid">
                <span className="lg:text-6xl md:text-4xl sm:text-4xl text-4xl text-center font-montSerrat text-black">{seconds}</span>
                <span className="lg:text-xl md:text-xl sm:text-lg text-md text-center font-montSerrat text-yellow-500">Segundos</span>
              </div>
        </div>
    )
}