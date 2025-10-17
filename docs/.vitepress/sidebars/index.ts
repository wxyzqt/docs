import { DefaultTheme } from "vitepress";
import basic from "./basic";
import frontend from "./frontend";
import node from "./node";
import assembly from "./assembly";
import cpp from "./cpp";
import standard from "./standard";
import openSource from "./openSource";

// ------顶部导航栏------
export const nav = [
  { text: "基础", link: "/basic" },
  { text: "前端", link: "/frontend" },
  { text: "Node", link: "/node" },
  { text: "汇编", link: "/assembly" },
  { text: "C++", link: "/cpp" },
  { text: "规范", link: "/standard" },
  { text: "开源", link: "/openSource" },
];

// ------侧边导航栏------
// 基础
export function sidebarBasic(): DefaultTheme.SidebarItem[] {
  return basic;
}

// 前端
export function sidebarFrontend(): DefaultTheme.SidebarItem[] {
  return frontend;
}

// Node
export function sidebarNode(): DefaultTheme.SidebarItem[] {
  return node;
}

// 汇编
export function sidebarAssembly(): DefaultTheme.SidebarItem[] {
  return assembly;
}

// C/C++
export function sidebarCpp(): DefaultTheme.SidebarItem[] {
  return cpp;
}

// 规范
export function sidebarStandrad(): DefaultTheme.SidebarItem[] {
  return standard;
}

// 开源项目
export function sidebarOpenSource(): DefaultTheme.SidebarItem[] {
  return openSource;
}
