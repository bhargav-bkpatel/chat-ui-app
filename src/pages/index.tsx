import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import CheatBanner from "@/components/chatBanner";
import Footer from "@/components/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
 <Head>
        <title>Chat UI</title>
        <meta name="description" content="Chat UI Description" />
        <meta name="keywords" content="Chat UI" />
        <meta name="author" content="Chat UI" />
        <meta name="viewport" content="Chat UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main>
      <div className="max-w-[656px] w-full m-auto max-h-[960px] h-full overflow-auto my-5">
        <Header />
        <CheatBanner />
        <Footer />
      </div>
    </main>
    </>
  );
}
