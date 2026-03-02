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
    <div className="group relative w-full overflow-hidden rounded-2xl bg-[#0a0a0a] shadow-xl">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* dark vignette over image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
      </div>

      {/* Content block */}
      <div className="relative px-5 pb-6 pt-4">
        {/* animated accent line */}
        <div className="mb-3 h-px w-8 bg-[#00f0ff] transition-all duration-500 group-hover:w-14" />

        <h3 className="text-lg font-bold uppercase tracking-widest text-white sm:text-xl">
          {title}
        </h3>

        {description && (
          <p className="mt-2 text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        )}

        {link && (
          <a
            href={link}
            className="group/link mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#00f0ff] transition-opacity hover:opacity-75"
          >
            Learn More
            <span className="transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

function EmployeeCard({ title, description, image, role }: EmployeeCardProps) {
  return (
    <div className="group relative w-full overflow-hidden rounded-xl bg-[#0f0f0f] shadow-md transition-transform duration-300 hover:scale-105">
      {/* Image */}
      <div className="relative aspect-[2/3]">
        <img
          src={image}
          alt={title}
          draggable="false"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Hover overlay */}
      <div
        className="
          absolute bottom-0 left-0 flex h-[45%] w-full
          flex-col items-center justify-end
          bg-gradient-to-t from-black/90 via-black/70 to-transparent
          p-4 opacity-100 transition-all duration-300
          sm:translate-y-6 sm:opacity-0
          sm:group-hover:translate-y-0 sm:group-hover:opacity-100
          sm:p-6
        "
      >
        <h3 className="text-lg font-bold text-white sm:text-xl">{title}</h3>
        {role && (
          <p className="mt-1 text-xs text-[#00f0ff] sm:text-sm">{role}</p>
        )}
        {description && (
          <p className="mt-2 text-center text-xs text-gray-300 sm:text-sm">
            {description}
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
