import Head from "next/head";
import Nav from "../components/Nav";
import Main from "./main";
import About from "./about";
import Skills from "./skills";
import Projects from "./works";
import Contact from "./contact";

export default function index() {
  return (
    <div className="snap-y snap-mandatory">
      <Head>
        <title>Henry | Full-Stack Developer</title>
      </Head>
      <Main />
    </div>
  );
}
