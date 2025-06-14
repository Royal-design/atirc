import storyImage from "@/assets/who-we-are/story.jpg";

export const Story = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 py-8 md:py-12 md:px-24 gap-4 md:gap-8">
      <section className="flex-1">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 md:mt-12 text-center md:text-start">
          Our Story
        </h1>
        <p className="text-sm leading-[150%]">
          At ATIRC, we believe that Africa’s greatest asset is its youth. With
          limitless potential and untapped talent, the next generation of tech
          innovators, leaders, and entrepreneurs is ready to emerge. Yet, the
          path to success has often been clouded by limited access to resources,
          training, and global opportunities. That's where we come in. Founded
          with a bold mission to empower Africa's young minds, ATIRC stands as a
          beacon of transformation. Our Advanced Technological Incubation and
          Research Center is not just a physical space—it's a vibrant ecosystem
          designed to ignite innovation and nurture talent. From cutting-edge
          research labs to world-class incubation programs, ATIRC provides a
          platform where creativity meets collaboration, and where ideas
          transform into impactful solutions. Our story is one of vision,
          passion, and empowerment. We are on a mission to redefine what is
          possible for African youth in tech. The future of technology is
          African, and at ATIRC, we’re giving today’s youth the tools to lead
          tomorrow’s digital revolution.
        </p>
      </section>
      <section className="flex-1">
        <img
          src={storyImage}
          alt="Story"
          className="h-full w-full object-cover"
        />
      </section>
    </div>
  );
};
