import Card from "../components/Card";

export default function About() {
  return (
    <section className="pt-15">
      <h1 className="text-[white]">About</h1>
      <div className="grid md:grid-cols-3 gap-8 max-w-[1600px] mx-auto px-6 py-12">
        <Card
          title="Rebecca Smith"
          role="Lead Technician"
          description="Specializes in European imports and advanced diagnostics."
          image="Person.png"
          variant="employee"
        />
      </div>
    </section>
  );
}
