const routes = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Login",
    url: "/login",
  },
  {
    label: "Protected route",
    url: "/protected",
    subroutes: [{ label: "Subroute", url: "/subroute" }],
  },
];

export default routes;
