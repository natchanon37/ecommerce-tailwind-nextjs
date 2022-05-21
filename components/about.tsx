import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className="{`flex flex-col bg-white py-20 text-3xl md:text-4xl`}">
      <div className="px-12 container mx-auto">
        <p className="mx-auto text-4xl leading-tight max-w-5xl tracking-tight">
          <strong>
            {" "}
            Beautiful, faster, compatible apps.<br></br>{" "}
          </strong>
          Our team has created the best user experiences for our customer around
          the world.
        </p>
      </div>
      <div className="container mx-auto text-center px-10 mt-28">
        <h2>Our Team</h2>
        <div className="mt-2">"the ducky"</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 lg:gap-20">
          <Member
            id="1"
            name="Non"
            socialID="@duckydup"
            link="https://translate.google.com/"
          />
          <Member
            id="2"
            name="Mile"
            socialID="@duckydup"
            link="https://translate.google.com/"
          />
          <Member
            id="3"
            name="Aeim"
            socialID="@duckydup"
            link="https://translate.google.com/"
          />
          <Member
            id="4"
            name="Paint"
            socialID="@duckydup"
            link="https://translate.google.com/"
          />
          <Member
            id="5"
            name="Non"
            socialID="@duckydup"
            link="https://translate.google.com/"
          />
          <Member
            id="6"
            name="Elon"
            socialID="@duckydup"
            link="https://translate.google.com/"
          />
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
