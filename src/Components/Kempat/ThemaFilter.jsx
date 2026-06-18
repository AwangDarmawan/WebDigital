export default function ThemeFilter({
  activeCategory,
  setActiveCategory,
}) {
  const categories = [
    {
      label: "Semua Tema",
      value: "all",
    },
    {
      label: "Best Seller",
      value: "best",
    },

    {
      label: "Tema Modern",
      value: "modern",
    },

    {
      label: "Motion + Adat",
      value: "adat",
    },
    {
      label: "Tanpa Poto",
      value: "nopoto",
    },

    
  ];

  return (
    <div
      className="
      flex
      flex-wrap
      justify-center
      gap-3
      mt-8
    "
    >
      {categories.map((item) => (
        <button
          key={item.value}
          onClick={() =>
            setActiveCategory(item.value)
          }
          className={`
          px-5
          py-3

          rounded-xl

          border

          transition-all
          duration-300

          ${
            activeCategory === item.value
              ? `
              bg-gradient-to-r
              from-[#E5C76B]
              via-[#C9A227]
              to-[#8B6B2E]

              text-white
              border-transparent
              `
              : `
              bg-white
              text-[#7A6850]
              border-[#D6B75A]/30
              font-space
              `
          }
        `}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}