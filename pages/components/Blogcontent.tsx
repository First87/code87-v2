import Image from 'next/image';
import { useState, useEffect } from 'react'
import { posts } from "../components/blogsData"
function Blogs() {
  const [isLoading, setIsLoading] = useState(true); // เริ่มต้นโหลดเมื่อเข้าหน้าเว็บ
  const [showBlogs, setShowBlogs] = useState(false); // แสดงหน้า #about หลังจากโหลดเสร็จแล้ว
  

 

  useEffect(() => {
    // ทำการโหลดข้อมูลจากแหล่งข้อมูล เช่น API หรืออื่น ๆ
    // เมื่อข้อมูลโหลดเสร็จแล้ว ให้เรียกฟังก์ชัน setIsLoading(false) เพื่อหยุดการแสดงอินดิเคเตอร์การโหลด
    // และเรียก setShowAbout(true) เพื่อแสดงหน้า #about
    setTimeout(() => {
      setIsLoading(false);
      setShowBlogs(true);
    },2000); // เปลี่ยนเวลาตามที่คุณต้องการ
  }, []);

  return (
    <div>
      

      {isLoading ? (
        <div
        className='full-loading'
         role="status">
          {/* แสดงอินดิเคเตอร์การโหลด */}
          <svg
            aria-hidden="true"
            className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-current"
            viewBox="0 0 100 101"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#FF9D34"
            />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.8710 24.3692 89.8167 20.3480C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.8130 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.8410C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.0830 38.2158 91.5421 39.6781 93.9676 39.0409Z" />
          </svg>
        </div>
      ) : (
        showBlogs && (
            <div className="bg-white1 py-24 sm:py-32">
            <div className="mx-auto  max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl m-2 text-center font-bold text-gray-900">บทความ</h2>
            <div className="line" style={{ margin: "2rem auto" }}></div>
              <div className="mx-auto   mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                  <article key={post.id} className="flex card-blog  max-w-xl flex-col items-start justify-between">
                    <div className="flex  blog-card items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      {/* <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p> */}
                    </div>
                    <div className="relative mt-8 flex items-center gap-x-4">
                      <Image 
                      width={100}
                      height={100}
                      sizes="100vw"
                      src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                    
                  </article>
                ))}
                
              </div>
              
            </div>
            
            
          </div>
          
        )
      )}
    </div>
  );
}

export default Blogs;
