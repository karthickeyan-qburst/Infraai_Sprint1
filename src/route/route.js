import { lazy } from "react";

const Home = lazy(() => import("./../admin/pages/home/Home"));
const Marketplace = lazy(() =>
  import("./../admin/pages/maketplace/Marketplace")
);
const Myprojects = lazy(() => import("./../admin/pages/myprojects/Myprojects"));
const Summary = lazy(() => import("./../admin/pages/intel/summary/Summary"));
const ProjectMap = lazy(() =>
  import("./../admin/pages/vision/projectMap/ProjectMap")
);

const routes = [
  {
    path: "/home",
    exact: true,
    name: "Home",
    element: Home,
    menutype: "main",
  },
  {
    path: "/myprojects",
    name: "My Projects",
    element: Myprojects,
    menutype: "main",
  },
  { path: "/intel/:id", name: "Intel", element: Summary, menutype: "sub" },
  {
    path: "/vision/:id",
    name: "Vision",
    element: ProjectMap,
    menutype: "sub",
  },
  {
    path: "/marketplace",
    name: "Marketplace",
    element: Marketplace,
    menutype: "main",
  },
];

export default routes;
