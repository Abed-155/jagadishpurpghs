import HomeSlider from "./components/HomeSlider";
import HeadTeacherMessage from "./components/HeadTeacherMessage";
import LastNotice from "./components/LastNotice";
import QuickStats from "./components/QuickStats";
import QuickContact from "./components/QuickContact";
import Head from "next/head";
import SchoolTitle from "./components/SchoolTitle";
import DateDisplay from "./components/DateDiplay";
import PresidentsMessage from "./prsident-msg/PresidentMessage";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>জগদীশপুর পাবলিক গার্লস হাই স্কুল | প্রধান পৃষ্ঠা</title>
        <meta
          name="description"
          content="জগদীশপুর পাবলিক গার্লস হাই স্কুল একটি আদর্শ নারী শিক্ষা প্রতিষ্ঠান, যেখানে মানসম্পন্ন শিক্ষার পরিবেশ নিশ্চিত করা হয়।"
        />
        <meta
          name="keywords"
          content="জগদীশপুর স্কুল, মেয়েদের স্কুল, উচ্চ বিদ্যালয়, madhabpur habiganj school"
        />
        <meta name="author" content="Jagadishpur Public Girls High School" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="জগদীশপুর পাবলিক গার্লস হাই স্কুল" />
        <meta
          property="og:description"
          content="স্বনামধন্য শিক্ষা প্রতিষ্ঠান। আমাদের ছাত্রীরা আলোকিত ভবিষ্যতের পথে এগিয়ে চলেছে।"
        />
        <meta
          property="og:image"
          content="https://jagadishpurpghs.vercel.app//og-image.jpg"
        />
        <meta property="og:url" content="https://jagadishpurpghs.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="জগদীশপুর পাবলিক গার্লস হাই স্কুল"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main>
        <SchoolTitle />
        <DateDisplay />
        <HomeSlider />
        <div className="max-w-5xl mx-auto p-2 mt-4 md:p-6 space-y-10">
          <LastNotice />
          <PresidentsMessage />
          <HeadTeacherMessage />
          <QuickStats />
          <QuickContact />
        </div>
      </main>
    </>
  );
}
