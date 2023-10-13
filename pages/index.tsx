import Head from "next/head";
import Navbar from "./components/Navbar";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";
import Sponsor from "./components/Sponsor";
import Blog from "./components/Product";
import React, { useEffect, useState } from 'react';
import TestAbout from "./components/About"; // เปลี่ยนชื่อคอมโพเนนต์เป็น TestAbout

function Page() {
  const [showAbout, setShowAbout] = useState(false); // แสดงหน้า #about หลังจากโหลดเสร็จแล้ว

  useEffect(() => {
    // ให้เรียก setShowAbout(true) เพื่อแสดงหน้า About เมื่อหน้าเว็บโหลดเสร็จ
    setShowAbout(true);
  }, []); // ใช้ dependency array เป็น []

  return (
    <>
      <Head>
        {/* โค้ดของ Head */}
      </Head>
      <div>
        <Navbar />
        <Maincontent />
        <Blog />
        {showAbout && <TestAbout />} {/* เปลี่ยนเป็น TestAbout */}
        <Sponsor />
        <Footer />
      </div>
    </>
  );
}

export default Page;
