export const staticLinks = {
  main: "/",
  commandment: "/commandment/:id",
  finance: "/finance",
  keys: "/keys",
  login: "/login",
  mail: "/mail",
  planet: "/planet",
  profile: "/profile",
  register: "/register",
  study: "/study",
  verdict: "/verdict/:id",
  votes: "/votes",
  work: "/work",
};

export const dynamicLinks = {
  commandment: (id) => `/commandment/${id}`,
  verdict: (id) => `/verdict/${id}`,
};
