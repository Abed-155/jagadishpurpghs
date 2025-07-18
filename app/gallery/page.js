import PageHeading from "../components/PageHeading";
import Teacher from "./Teacher";
import Students from "./Students";
import Events from "./Events";
import QuickContact from "../components/QuickContact";
import Head from "next/head";

export default function Gallery() {
  return (
    <>
      <Head>
        <title>ছবির গ্যালারি | জগদীশপুর পাবলিক গার্লস হাই স্কুল</title>
        <meta name="keyword" content="school shoolpic" />
        <meta
          name="description"
          content="বিদ্যালয়ের বিভিন্ন অনুষ্ঠান, ছাত্রছাত্রীদের কার্যক্রম, এবং ক্যাম্পাসের মুহূর্তগুলোর ফটো গ্যালারি।"
        />
      </Head>
      <main className="max-w-5xl mx-auto p-6 space-y-10">
        <PageHeading title="স্কুল গ্যালারি" />
        <Teacher />
        <Students />
        <Events />
        <QuickContact />
      </main>
    </>
  );
}
