import CollapsibleSection from "@/components/collapsible-section";
import CollapsibleSectionHead from "@/components/collapsible-section-head";

const Head = () => (
  <CollapsibleSectionHead title="Work">
    Take a look at my work. Some of them are ambitious unfinished projects (or
    rather most of them 🫣) spanning various domains. But, I hope you can derive
    something useful out of them.
  </CollapsibleSectionHead>
);

const WorkSection = () => (
  <CollapsibleSection head={<Head />}></CollapsibleSection>
);

export default WorkSection;
