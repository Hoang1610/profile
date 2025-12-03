import type { ProfileData } from "./types/type";

export const PROFILE_DATA: ProfileData = {
  location: "Hồ Chí Minh, Việt Nam",
  email: "nguyenkimhoang419@gmail.com",
  phone: "0947492406",
  github: "https://github.com/Hoang1610",
  avatarUrl: "https://picsum.photos/400/400",
  education: [
    {
      school: "Đại học giao thông vận tải TP.HCM",
      degree: "Sinh viên năm 4",
      period: "2022 - Hiện tại",
      description: "GPA thuôc loại giỏi",
    },
  ],
  skills: [
    {
      category: "Core",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit", "SCSS"],
    },
    {
      category: "Backend & Tools",
      items: ["Node.js", "Firebase", "Git", "Docker", "Webpack", "Vite"],
    },
  ],
  projects: [
    {
      id: "1",
      title: "Music Website",
      description:
        "Xây dựng website nghe nhạc có tích hợp AI dùng để đề cử bài hát cho người dùng",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind",
        "Shadcn",
        "Node.js",
        "MongoDB",
      ],
      repoUrl: "https://github.com/Hoang1610/musicWeb",
      demoUrl: "https://demo.com",
      imageUrl: "/image.png",
    },
    {
      id: "2",
      title: "Restaurant management website",
      description:
        "Xây dụng trang web quản lý và đặt đồ ăn cho nhà hàng bằng QR.",
      technologies: ["Next.js", "Shadcn", "Tailwind", "Socket.io"],
      repoUrl: "https://github.com/Hoang1610/next_project/",
      imageUrl: "/image2.png",
    },
    {
      id: "3",
      title: "Book website",
      description: "Xây dựng website bán sách online và trang quản lý",
      technologies: ["React.js", "Antd", "Redux toolkit"],
      repoUrl: "https://github.com/Hoang1610/shop__FE",
      demoUrl: "https://shop-clone-t.vercel.app/",
      imageUrl: "/image1.png",
    },
  ],
};
