import { useContext } from "react";
import SectionContext from "./SectionContext";

const useSectionTitle = (sectionName) => {
  const { currentSection } = useContext(SectionContext);

  return currentSection === sectionName;
};

export default useSectionTitle;
