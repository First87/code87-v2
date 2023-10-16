import Head from "next/head";
import Navbar from "./components/Navbar";
import Maincontent from "./components/Maincontent";
import About from "./components/About";
import Footer from "./components/Footer";
import Sponsor from "./components/Sponsor";
import Blog from "./components/Product";
import React, { useEffect, useState } from 'react';
import TestAbout from "./components/About"; // เปลี่ยนชื่อคอมโพเนนต์เป็น TestAbout

function Page() {

  return (
    <>
      <Head>
      <title>Code87</title>
      <meta
          name="description"
          content="เราคือทีมพัฒนาที่พร้อมจะนำพาธุรกิจของคุณให้เติบโตอย่างไม่มีขีดจำกัด"
        />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index,follow" />
      <meta name="keywords" content="เว็บไซต์, ออกแบบเว็บไซต์, พัฒนาเว็บไซต์, SEO, การตลาดออนไลน์, การเพิ่มประสิทธิภาพ SEO, การสร้างเนื้อหาที่มีคุณค่า, การจัดการเนื้อหา, การวิเคราะห์คีย์เวิร์ด, การสร้างลิงค์, การใช้โซเชียลมีเดีย, การวิเคราะห์ผลการทำ SEO, เว็บไซต์ที่เป็นมือถือ, การเพิ่มประสิทธิภาพการโหลดหน้า, การให้บริการออกแบบเว็บไซต์, เว็บพัฒนา, นักพัฒนาเว็บ, การออกแบบเว็บ, HTML, CSS, JavaScript, SEO, ประสิทธิภาพเว็บ, การทำเว็บ, ความปลอดภัยเว็บ" />

      </Head>
      <div>
        <Navbar />
        <Maincontent />
        <Blog />
        <About/>
        <Sponsor />
        <Footer />
      </div>
    </>
  );
}

export default Page;
