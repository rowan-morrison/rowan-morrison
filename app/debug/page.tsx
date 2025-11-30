export default function DebugTailwind() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="font-heading text-headingLarge">
        Heading Large — should use your heading font
      </h1>
      <p className="font-body text-bodyMedium">
        Body Medium — should use your body font
      </p>
      <span className="font-label text-labelSmall small-caps">
        Label Small — should use label font + small caps
      </span>
      <div className="bg-emerald text-white p-4">
        Color emerald utility test
      </div>
    </div>
  );
}