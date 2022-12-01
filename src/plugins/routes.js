import VueRouter from "vue-router"
import cookies from "vue-cookies"

const routes = [
  {
    path: "*",
    redirect: 'home',
  },
  {
    path: "/",
    redirect: 'home',
  },
  {
    path: "/home",
    component: () => import('@/views/Home.vue'),
    name: "home"
  },
  {
    path: "/table",
    component: () => import('@/views/table/Table.vue'),
    name: "table",
    meta: {
      layout: 'emps',
    },
  },
]

const router = new VueRouter({
  // mode: 'history', 
  routes,
});

function checkAuthenticate(to, next) {
  if (to.name !== 'login' && (cookies.get("wbs-authenticated") === "false" || !cookies.isKey("wbs-authenticated"))) {
    cookies.keys().forEach((cookie) => cookies.remove(cookie));
    next({ name: 'login', query: { redirect: to.fullPath } });
  }
  else if (to.name == 'login' && cookies.get("wbs-authenticated") === "true")
    next({ name: 'home' });
  else
    next();
}

// kalau udah ada login, function dibawah di un-comment aja
// router.beforeEach(async (to, from, next) => {
//   if (to.name == "error-404" || from.name == "login")
//     next()
//   if (from.name !== null) {
//     let accessList = cookies.get("wbs-access-list");
//     if (to.meta.menuFeature !== undefined) {
//       let menuFeature = to.meta.menuFeature;
//       if (accessList.length == 0) {
//         next({ name: 'error-404' })
//       }
//       for (let i = 0; i < menuFeature.length; i++) {
//         if (accessList[menuFeature[i]] !== undefined) {
//           checkAuthenticate(to, next);
//           break;
//         } else if (i == menuFeature.length - 1) {
//           next({ name: 'error-404' })
//         }
//       }
//     } else {
//       checkAuthenticate(to, next);
//     }
//   } else {
//     checkAuthenticate(to, next);
//   }
// })

export default router;