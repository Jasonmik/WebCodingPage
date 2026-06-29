// DetailPage 数据配置
export const DETAIL_PAGE_DATA = {
  page01: {
    title: ["projects", "showcase"],
    description: "精选前端项目展示，注重用户体验与视觉表现力。",
    projectNumber: "01",
    totalProjects: "03",
    role: "前端开发",
    agency: "个人开发者",
    year: "2026",
    awards: "-",
    portrait: {
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    },
    cards: [
      {
        image: "/illustration/01.png",
      },
      {
        image: "/illustration/02.png",
      },
      {
        image: "/illustration/03.png",
      },
      {
        image: "/illustration/04.png",
      },
    ],
  },
  page02: {
    title: ["portfolio", "2026"],
    description: "前端个人作品集，持续迭代中。",
    projectNumber: "02",
    totalProjects: "03",
    role: "前端工程师",
    agency: "个人开发者",
    year: "2026",
    awards: "FWA OF THE DAY",
    cards: [
      {
        image: "/portfolio/01.png",
      },
      {
        image: "/portfolio/02.png",
      },
      {
        image: "/portfolio/03.png",
      },
      {
        image: "/portfolio/04.png",
      },
      {
        image: "/portfolio/05.png",
      },
      {
        image: "/portfolio/06.png",
      },
    ],
  },
  page03: {
    title: ["tech", "stack"],
    description: "热爱技术，不断探索前端新领域。",
    projectNumber: "03",
    totalProjects: "03",
    role: "全栈学习者",
    agency: "开源贡献者",
    year: "2025",
    awards: "-",
    cards: [
      {
        image: "/photograph/01.png",
      },
      {
        image: "/photograph/02.png",
      },
      {
        image: "/photograph/03.png",
      },
      {
        image: "/photograph/04.png",
      },
    ],
  },
};

export const getDetailPageData = (pageId) => {
  return DETAIL_PAGE_DATA[pageId] || DETAIL_PAGE_DATA.page01;
};
