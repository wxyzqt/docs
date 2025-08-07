import { DefaultTheme } from "vitepress";
import { handBook } from "./sidebars/handbook";
import { standard } from "./sidebars/standard";
import { tool } from "./sidebars/tool";
import { code } from "./sidebars/code";

// ------顶部导航栏------
export const nav = [
  { text: "手册", link: "/handbook" },
  { text: "规范", link: "/standard" },
  { text: "工具", link: "/tool" },
  { text: "源码", link: "/code" },
];

// ------侧边导航栏------
// 手册
export function sidebarHandBook(): DefaultTheme.SidebarItem[] {
  return [handBook];
}

// 规范页
export function sidebarStandrad(): DefaultTheme.SidebarItem[] {
  return [standard];
}

// 工具页
export function sidebarTool(): DefaultTheme.SidebarItem[] {
  return [tool];
}

// 源码页
export function sidebarCode(): DefaultTheme.SidebarItem[] {
  return [code];
}
