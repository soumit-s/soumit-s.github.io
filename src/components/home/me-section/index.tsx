import CollapsibleSection from "@/components/collapsible-section";
import CollapsibleSectionHead from "@/components/collapsible-section-head";

const MeSection = () => (
  <CollapsibleSection
    head={
      <CollapsibleSectionHead title="Myself">
        Learn more about me, my hobbies, aspirations and likings. Want to see
        how I look ? Then this is the right place for you to go
      </CollapsibleSectionHead>
    }
  ></CollapsibleSection>
);

export default MeSection;
