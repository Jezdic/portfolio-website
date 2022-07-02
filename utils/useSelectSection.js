import { useContext } from "react";
import SectionContext from "../utils/SectionContext";

import { useInView } from "react-hook-inview";

const useSelectSection = (sectionId, isHeader) => {
  const { setCurrentSection } = useContext(SectionContext);
  const [ref] = useInView({
    rootMargin: `0px 0px ${isHeader ? "-50%" : "-70%"} 0px`,
    onEnter: () => {
      setCurrentSection(sectionId);
    },
  });

  return ref;
};

export default useSelectSection;
