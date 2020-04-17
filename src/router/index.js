import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Declaration from "@/components/Declaration";
import Licenses from "@/components/Licenses";
import OpenSourceLicenses from "@/components/OpenSourceLicenses";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Whatsapp from "@/components/Whatsapp";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/open-source-licenses",
      name: "OpenSourceLicenses",
      component: OpenSourceLicenses,
    },
    {
      path: "/privacypolicy",
      name: "PrivacyPolicy",
      component: PrivacyPolicy,
    },
    {
      path: "/declaration",
      name: "Declaration",
      component: Declaration,
    },
    {
      path: "/licenses",
      name: "Licenses",
      component: Licenses,
    },
    {
      path: "/*",
      redirect: {
        name: "Home",
      },
    },
  ],
});
