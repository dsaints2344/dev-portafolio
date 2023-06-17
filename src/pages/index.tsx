import Welcome from "@/components/home/welcome";
import { GetStaticPropsContext } from "next";
export default function Home() {
  return (
    <>
      <Welcome />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      messages: (await import("../../messages/en.json")).default,
    },
  };
};
