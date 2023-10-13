import React from "react";
export const posts = [
  {
    id: 1,
    title: "ตารางเทียบ หุน-มิล",
    href: `/blog/${1}`,
    description: (
      <table
        style={{ boxShadow: "2px 2px 8px 4px rgba(0, 0, 0, 0.07)" }}
        className="w-1/2 text-sm text-left text-white-500 dark:text-white-400 tb-blog"
      >
        <thead className="text-xs text-white-700 uppercase bg-gray-200 dark:bg-white-700 dark:text-white-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              นิ้ว
            </th>
            <th scope="col" className="px-6 py-3">
              ภาษาเรียก หุน
            </th>
            <th scope="col" className="px-6 py-3">
              มิลลิเมตร
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white1  border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">1.16″</td>
            <td className="px-6 py-4">ครึ่งหุน</td>
            <td className="px-6 py-4">1.5875</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">1/8″</td>
            <td className="px-6 py-4">1 หุน</td>
            <td className="px-6 py-4">3.175</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">3/16″</td>
            <td className="px-6 py-4">1 หุนครึ่ง</td>
            <td className="px-6 py-4">4.7625</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">1/4″</td>
            <td className="px-6 py-4">2 หุน</td>
            <td className="px-6 py-4">6.35</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">5/16″</td>
            <td className="px-6 py-4">2 หุนครึ่ง</td>
            <td className="px-6 py-4">7.9375</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">3/8″</td>
            <td className="px-6 py-4">3 หุน</td>
            <td className="px-6 py-4">9.525</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">7/16″</td>
            <td className="px-6 py-4">3 หุนครึ่ง</td>
            <td className="px-6 py-4">11.1125</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">1/2″</td>
            <td className="px-6 py-4">4 หุน</td>
            <td className="px-6 py-4">12.7</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">9/16″</td>
            <td className="px-6 py-4">4 หุนครึ่ง</td>
            <td className="px-6 py-4">14.2875</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">5/8″</td>
            <td className="px-6 py-4">5 หุน</td>
            <td className="px-6 py-4">15.875</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">11/16″</td>
            <td className="px-6 py-4">5 หุนครึ่ง</td>
            <td className="px-6 py-4">17.4625</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">3/4″</td>
            <td className="px-6 py-4">6 หุน</td>
            <td className="px-6 py-4">19.05</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">13/16″</td>
            <td className="px-6 py-4">6 หุนครึ่ง</td>
            <td className="px-6 py-4">20.6375</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">7/8″</td>
            <td className="px-6 py-4">7 หุน</td>
            <td className="px-6 py-4">22.225</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">15/16″</td>
            <td className="px-6 py-4">7 หุนครึ่ง</td>
            <td className="px-6 py-4">23.8125</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">1″</td>
            <td className="px-6 py-4">8 หุน</td>
            <td className="px-6 py-4">25.4</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">1.1/8″</td>
            <td className="px-6 py-4">หนึ่งนิ้วหนึ่งหุน</td>
            <td className="px-6 py-4">28.575</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">1.1/4″</td>
            <td className="px-6 py-4">หนึ่งนิ้วสองหุน</td>
            <td className="px-6 py-4">31.75</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">1.1/2″</td>
            <td className="px-6 py-4">หนึ่งนิ้วครึ่ง</td>
            <td className="px-6 py-4">38.1</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">1.3/4″</td>
            <td className="px-6 py-4">หนึ่งนิ้วหกหุน</td>
            <td className="px-6 py-4">44.45</td>
          </tr>
          <tr className="bg-white1 border-b dark:bg-white-800 dark:border-white-700">
            <td className="px-6 py-4">2″</td>
            <td className="px-6 py-4">สองนิ้ว</td>
            <td className="px-6 py-4">50.8</td>
          </tr>
        </tbody>
      </table>
    ),
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: {
      title: ["#เครื่องมือวัด", " 88888"],
      href: "#",
    },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "ประโยชน์อลูมิเนียม",
    href: `/blog/${2}`,
    description: (
      <div style={{ width: "70%" }}>
        <b> 1. ด้านการก่อสร้าง</b>
        <br />
        <p>
          เนื่องจากอลูมิเนียมเป็นวัสดุที่มีน้ำหนักเบา มีคุณสมบัติคงทน
          สามารถนำไปใช้งานทดแทนเหล็กและไม้ได้เป็นอย่างดีอลูมิเนียมจึงได้ถูกนำมาใช้เป็นวัสดุตกแต่งในงานต่างๆ
          รวมถึงใช้เป็นโครงสร้าง ทั้งโครงสร้างเสา
          โครงสร้างสำหรับใช้ในการประกอบประตู หน้าต่าง บันได ราวกั้น รั้วและอื่นๆ
        </p>
        <br />
        <b> 2. ด้านการขนส่ง</b>
        <p>
          เนื่องจากคุณสมบัติที่โดดเด่นของอลูมิเนียมคือ มีน้ำหนักเบา
          และไม่เกิดสนิม มีอายุการใช้งานที่ค่อนข้างยาวหากเทียบกับวัสดุชนิดอื่นๆ
          และสามารถทนต่อแรงกดแรงกระแทกได้มาก
          อลูมิเนียมจึงมักถูกนำมาใช้งานเป็นโครงสร้างสำหรับอุตสาหกรรมรถยนต์
          ใช้เป็นชื้นส่วนรถยนต์ รถไฟ เครื่องบิน และยานพาหนะอื่นๆ
        </p>
        <br />
        <b> 3. ด้านการบรรจุภัณฑ์</b>
        <p>
          อลูมิเนียมเป็นโลหะที่มีคุณสมบัติทนต่อการกัดกร่อนและทนต่อความร้อนได้ดี
          ไม่เกิดสนิม และทำปฏิกิริยากับอาหารหรือสารเคมีต่างๆได้ยาก
          จึงนิยมนำถูกมาผลิตเป็นภาชนะสำหรับการประกอบอาหารและเป็นบรรจุภัณฑ์สำหรับบรรจุอาหาร
          ได้แก่ กระป๋องบรรจุอาหาร กระทะ จาน ชาม หม้อ และฟอยล์ครอบอาหาร เป็นต้น
        </p>
        <br />
        <b> 4. ด้านอุตสาหกรรมไฟฟ้า</b>
        <p>
          อลูมิเนียมเป็นวัสดุที่สามารถนำไฟฟ้าได้ดี มีความคงทน
          มีน้ำหนักเบาและไม่เกิดสนิม จึงถูกพิจารณานำมาใช้สำหรับทำสายไฟฟ้า
          อุปกรณ์อิเล็กทรอนิกส์ และส่วนประกอบวงจรอิเล็กทรอนิกส์
        </p>
        <br />
        <br />
      </div>
    ),
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "โลหะ", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const BlogData = () => {
  // โค้ดของข้อมูลบล็อก
};

export default BlogData;
