export const useAppStore = defineStore("app", () => {
  const state = {
    test: "Hello, World!"
  };
  const linkedin =
    "https://www.linkedin.com/in/%E5%8B%9D%E5%BC%98-%E9%BB%83-1088b8257/";
  const mail = "pray870712@gmail.com";

  return {
    state,
    linkedin,
    mail
  };
});
