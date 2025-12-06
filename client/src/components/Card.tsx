type CardProps = {
  title: string;
  description: string;
  image?: string;
  link?: string;
  role?: string;
  variant?: "service" | "employee"; // 👈 choose style
};

export default function Card({
  title,
  description,
  image,
  link,
  role,
  variant = "service", // default
}: CardProps) {
  const baseStyles =
    "rounded-2xl shadow-md overflow-hidden transition duration-300";
  const serviceStyles = "bg-[#1b1a18] hover:shadow-lg max-w-sm text-left";
  const employeeStyles = "bg-[#0f0f0f] hover:scale-105 max-w-xs text-center";

  return (
    <div
      className={`${baseStyles} ${
        variant === "employee" ? employeeStyles : serviceStyles
      }`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className={`w-full object-cover ${
            variant === "employee" ? "h-64 rounded-t-2xl" : "h-48"
          }`}
        />
      )}

      <div
        className={`p-6 flex flex-col gap-2 ${
          variant === "employee" ? "items-center" : ""
        }`}
      >
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {role && variant === "employee" && (
          <p className="text-sm text-[#fe0002]">{role}</p>
        )}
        <p className="text-gray-400">{description}</p>

        {/* Service card link */}
        {link && variant === "service" && (
          <a
            href={link}
            className="mt-2 text-[#fe0002] font-semibold hover:underline"
          >
            Learn More →
          </a>
        )}
      </div>
    </div>
  );
}
