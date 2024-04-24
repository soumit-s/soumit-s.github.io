import Image from "next/image";
import CollapsibleSection from "@/components/collapsible-section";
import CollapsibleSectionHead from "@/components/collapsible-section-head";

const Head = () => (
  <CollapsibleSectionHead title="Blog">
    <div className="p-8 font-ojuju font-black text-4xl bg-black text-white rounded-md flex gap-8 items-center">
      <div>
        <Image src="/assets/cattest_cropped.gif" alt=":(" width={600} height={600} className="w-20 invert" />
      </div>
      <div>Coming<br/> Soon</div>
    </div>
  </CollapsibleSectionHead>
);

const BlogsSection = () => (
  <CollapsibleSection head={<Head/>} >
  </CollapsibleSection>
);

export default BlogsSection;