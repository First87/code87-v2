import Image from "next/image"
export default function Example() {

  return (
    <>
    <div className="bg-white1">


      <div className="relative isolate px-6 pt-14 lg:px-8">
      <Image
          width={100}
          height={100}
          sizes="100vw"
          priority={true} 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          alt="banner"
          className="absolute opacity-90 inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-w ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              ดูโปรโมชั่นประจำเดือน{' '}
              <a href="#" className="font-semibold ">
                <span className="absolute inset-0" aria-hidden="true" />
                ดูเพิ่มเติม <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              ออกแบบเว็บไซต์ ตามสไตล์ของคุณ
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              โดยผู้เชี่ยวชาญเฉพาะทาง ประสบการณ์มากกว่า 10ปี  พร้อมให้คำปรึกษา 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md btn-1 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                ดูเทมเพลท
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                ออกแบบเว็บไซต์ <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        
        </div>
      

      
    </div>
    </>
  )
}
