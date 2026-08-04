import "./AboutMeSection.scss";

import { ReactElement } from "react";

import { Subtitle } from "@/components/atoms/Subtitle/Subtitle";
import { TextSection } from "@/components/atoms/TextSection/TextSection";
import { Title } from "@/components/atoms/Title/Title";

export const AboutMeSection = (): ReactElement => {
  return (
    <div
      className="about-me-section"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Title label="about-me.full-name" />
      <Subtitle label="about-me.job-title" />
      <TextSection label="about-me.description" />
    </div>
  );
};
