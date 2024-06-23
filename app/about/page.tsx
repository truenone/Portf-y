import { title } from "@/components/primitives";
import { WobbleCardDemo } from "@/components/wobbleCard";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className={title()}>Hizmetlerim</h1>
      <WobbleCardDemo />
    </div>
  );
}
