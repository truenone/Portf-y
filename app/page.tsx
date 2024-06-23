import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { FlipWordsDemo } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <FlipWordsDemo /> 
        <h2 className={subtitle({ class: "mt-4" })}>
          Güvenilir, hızlı ve modern iş arkadaşınız.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={'/resume'}
        >
          Projelerim
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={"https://bionluk.com/truenn"}
        >
          <Image height={20} width={20} src={'/bionluk.png'} alt="bionluk logo" className="rounded-full " />
          Bionluk
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Discord: <Code color="primary">truen</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
