export default function auth({ next, router }) {
  if (!localStorage.getItem("jwtToken")) {
    return router.push({ name: "Home" });
  }

  return next();
}
