import { ReactNode } from "react";

export default function SectionWrapper({
  children,
  id,
}: {
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="py-20 px-6 sm:px-12 lg:px-24">
      {children}
    </section>
  );
}
