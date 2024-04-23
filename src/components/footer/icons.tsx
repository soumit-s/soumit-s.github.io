const Icon = ({ children }: { children: string }) => (
  <div className="text-wraps lowercase font-bricolage-grotesque font-medium text-neutral-800">
    {children}
  </div>
);

export const ReachIcon = () => <Icon children={"reach"} />;
export const MeIcon = () => <Icon children={"me"} />;
export const BlogIcon = () => <Icon children={"blog"} />;
export const WorkIcon = () => <Icon children={"work"} />;
