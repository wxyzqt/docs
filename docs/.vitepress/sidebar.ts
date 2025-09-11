import { DefaultTheme } from "vitepress";
import handBook from "./sidebars/handbook";
import standard from "./sidebars/standard";
import princple from "./sidebars/princple";

// ------顶部导航栏------
export const nav = [
  { text: "手册", link: "/handbook" },
  { text: "规范", link: "/standard" },
  { text: "原理", link: "/principle" },
];

// ------侧边导航栏------
// 手册
export function sidebarHandBook(): DefaultTheme.SidebarItem[] {
  return handBook;
}

// 规范
export function sidebarStandrad(): DefaultTheme.SidebarItem[] {
  return standard;
}

// 原理
export function sidebarPrinciple(): DefaultTheme.SidebarItem[] {
  return princple;
}
