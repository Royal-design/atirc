import { FAQAccordion } from "./FAQAccordion";

export const FAQ = () => {
  return (
    <div className="px-4 md:px-24 md:max-w-3xl md:mx-auto w-full py-4 md:py-8">
      <h1 className="text-2xl md:text-3xl text-center">
        Frequently Asked Questions
      </h1>
      <div className="my-8">
        <FAQAccordion />
      </div>
    </div>
  );
};
