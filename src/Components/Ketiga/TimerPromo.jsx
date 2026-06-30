import { useEffect, useState } from "react";

export default function TimerPromo({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = targetDate - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-center text-red-500 font-bold">
        Promo telah berakhir
      </div>
    );
  }

  const items = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <div
      className="
      mt-10

      grid
      grid-cols-2
      sm:grid-cols-4

      gap-4

      max-w-3xl
      mx-auto
    "
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="
          rounded-2xl

          p-4
          sm:p-5
          md:p-6

          bg-white

          border
          border-[#D6B75A]/30

          shadow-[0_0_25px_rgba(229,199,107,0.12)]
        "
        >
          <h3
            className="
            text-2xl
            sm:text-3xl
            md:text-4xl

            font-black

            text-[#C9A227]
            font-space
          "
          >
            {String(item.value).padStart(2, "0")}
          </h3>

          <p
            className="
            mt-2

            text-xs
            sm:text-sm

            text-[#7A6850]
            italic
          "
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}