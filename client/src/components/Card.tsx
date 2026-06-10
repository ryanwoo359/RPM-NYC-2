import { Link } from "react-router-dom";

type BaseCardProps = {
  title: string;
  image: string;
  description?: string;
};

type ServiceCardProps = BaseCardProps & {
  variant: "service";
  link?: string;
  role?: never;
};

type EmployeeCardProps = BaseCardProps & {
  variant: "employee";
  role?: string;
  link?: never;
};

type CardProps = ServiceCardProps | EmployeeCardProps;

function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <div className="group relative grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-2xl bg-[#0a0a0a] shadow-xl">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          decoding="async"
          loading="lazy"
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="grid h-full grid-rows-[auto_1fr_auto] px-5 pb-6 pt-4">
        <h3
          className="font-bold uppercase tracking-widest text-white"
          style={{ fontSize: "clamp(0.65rem, 3.5vw, 1.25rem)" }}
        >
          {title}
        </h3>

        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        ) : (
          <div />
        )}

        {link && (
          <Link
            to={link}
            className="group/link mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00f0ff] transition-opacity hover:opacity-75"
          >
            Learn More
            <span className="transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}

function EmployeeCard({ title, image, role }: EmployeeCardProps) {
  return (
    <div className="group relative w-full overflow-hidden bg-[#0f0f0f]">
      {/* Image — rendered in black & white */}
      <div className="relative aspect-[2/3]">
        <img
          src={image}
          alt={title}
          decoding="async"
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>

      {/* Text overlay — always visible, accent color reveals on hover */}
      <div
        className="
          absolute bottom-0 left-0 flex h-[45%] w-full
          flex-col justify-end
          bg-gradient-to-t from-black/90 via-black/70 to-transparent
          p-4 sm:p-6
        "
      >
        <h3 className="text-lg font-bold text-white sm:text-xl uppercase">
          {title}
        </h3>
        {role && (
          <p className="mt-1 text-sm text-gray-400 transition-colors duration-300 group-hover:text-[#00f0ff] uppercase">
            {role}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Card(props: CardProps) {
  if (props.variant === "service") return <ServiceCard {...props} />;
  return <EmployeeCard {...props} />;
}
