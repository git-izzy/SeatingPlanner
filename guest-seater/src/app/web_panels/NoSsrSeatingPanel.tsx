import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("./seatingPanel"), {
  ssr: false,
});

export default function NoSSRSeatingPanel() {
  return <NoSSR/>;
}