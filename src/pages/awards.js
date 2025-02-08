import React from "react";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Imagescroll from "@/components/Imagescroll";
import AnimatedText from "@/components/AnimatedText";

const Dropimage = () => {
  return (
    <>
      <Head>
        <title>Achievements and Awards</title>
      </Head>
      <TransitionEffect />
      <div className="lg:my-6">
        <div style={{ marginTop: "4.2%" }}>
          <AnimatedText
            text="Achievements and Awards"
            className="text-4xl mb-16 lg:mb-10"
          />
        </div>
        <div style={{ padding: "10px" }} className="dark:text-light">
          <p className="text-2xl">
            In the ever-evolving landscape of my career, I've been driven by an
            unwavering commitment to excellence and a relentless pursuit of
            growth. Along this path, I've had the honor of achieving significant
            milestones and garnering prestigious awards. These accolades not
            only signify the recognition of my dedication but also represent the
            invaluable experiences, collaborations, and challenges that have
            enriched my professional journey.
          </p>
          <p className="mt-3 text-2xl">
            As I look back on these achievements, each one tells a unique story
            – a story of dedication, innovation, and the pursuit of a higher
            standard. They are the result of countless hours of hard work,
            continuous learning, and the unwavering support of mentors,
            colleagues, and collaborators who have been instrumental in my
            success.
          </p>
          <p className="mt-3 text-2xl">
            Throughout my career, I've embraced challenges, sought opportunities
            for growth, and strived for excellence in all that I do. Along this
            exhilarating journey, I've been honored with a collection of
            prestigious awards and recognitions. These achievements are more
            than just accolades; they are a reflection of my dedication, a
            testament to the incredible collaborations and projects I've been a
            part of, and a reminder that the pursuit of greatness is an ongoing
            adventure.
          </p>
          <p className=" mt-3 text-2xl dark:text-light">
            In this section, I invite you to explore a collection of these
            remarkable achievements and awards. They provide insight into the
            diverse facets of my career and the meaningful contributions I've
            made in my field. Each recognition is a source of pride and
            motivation, propelling me forward on this exciting path of discovery
            and accomplishment.
          </p>
          <p className="mt-3 text-2xl dark:text-light">
            Each award and achievement in this section embodies a unique story—a
            narrative of innovation, determination, and the relentless pursuit
            of excellence. They are the product of sleepless nights, countless
            revisions, and the support and mentorship of individuals who
            believed in my potential.
          </p>
          <p className="mt-3 text-2xl dark:text-light">
            As you delve into this portfolio of accomplishments, you'll gain
            insight into the diverse facets of my professional journey and the
            varied roles I've played. These accolades celebrate not just
            individual accomplishments, but also the partnerships and
            collaborations that have shaped my path.
          </p>
        </div>
        <Imagescroll />
        <div className="text-2xl dark:text-light">
          Thank you for joining me on this journey as I share the moments that
          have shaped my professional narrative, and I look forward to many more
          opportunities to push the boundaries of what's possible and inspire
          positive change.
        </div>
      </div>
    </>
  );
};

export default Dropimage;
