// pages/product/[id].tsx
import React from "react";
import Link from "next/link";
import { posts } from "../components/blogsData";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Head from "next/head";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const postId = typeof id === "string" ? parseInt(id, 10) : undefined;
  const post = posts.find((p) => p.id === postId);

  const Navbar = dynamic(() => import("../components/Navbar"), {
    loading: () => <div className="animate-pulse "></div>,
    ssr: false,
  });

  const Footer = dynamic(() => import("../components/Footer"), {
    loading: () => <div className="animate-pulse "></div>,
    ssr: false,
  });

  if (!post) {
    return <div>data not found</div>;
  }

  return (
    <>
      <Head>
        <title> : {post.title} | </title>
        {/* คำอธิบายเว็บไซต์และเมตาแท็กอื่น ๆ */}
      </Head>
      <Navbar />
      <Link
        href="/blog"
        className="text-xl text-center font-bold back-products"
      >
        ย้อนกลับ
      </Link>
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center">
          {post.title}
        </h2>
        <div className="line" style={{ margin: "2rem auto" }}></div>
      </div>
      <div>
        <p style={{ display: "flex", justifyContent: "center" }}>
          {post.description}
        </p>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
}
