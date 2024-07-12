import type { VNode } from "preact";
import type { RenderFunctionInput } from "../types.js";

// from https://fullstackheroes.com/resources/vercel-og-templates/full-bg-image/
export async function backgroundImage({ title }: RenderFunctionInput): Promise<VNode> {
  const image = "https://picsum.photos/seed/picsum/1200/627";

  const twj = (await import("tw-to-css")).twj;

  return (
    <div style={twj("h-full w-full flex items-start justify-start bg-white")}>
      <div style={twj("flex items-start justify-start h-full")}>
        <img style={{ ...twj("absolute inset-0 w-full h-full"), ...{ objectFit: "cover" } }} src={image} />
        <div style={twj("bg-black absolute inset-0 bg-opacity-60")}></div>
        <div style={twj("flex items-center justify-center w-full h-full relative")}>
          <div style={twj("text-[80px] text-white font-black text-center mx-20")}>{title}</div>
        </div>
      </div>
    </div>
  );
}
