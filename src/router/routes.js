import VueRouter from "vue-router"
import cookies from "vue-cookies"

const routes = [
    // {
    //     path: "*",
    //     redirect: 'home',
    // },
    // {
    //     path: "/",
    //     redirect: 'home',
    // },
    // {
    //     path: "/login",
    //     component: () => import('@/views/Login.vue'),
    //     name: "login",
    //     meta: {
    //         layout: 'blank',
    //     },
    // },
    // {
    //     path: "/home",
    //     component: () => import('@/views/Home.vue'),
    //     name: "home"
    // },
]

const router = new VueRouter({
    // mode: 'history', 
    routes,
});

function checkAuthenticate(to, next) {

    if (to.name !== 'login' && (cookies.get("Authenticated") === "false" || !cookies.isKey("Authenticated"))) {
        cookies.keys().forEach((cookie) => cookies.remove(cookie));
        next({ name: 'login' });
    }
    else if (to.name == 'login' && cookies.get("Authenticated") === "true")
        next({ name: 'home' });
    else
        next();
}

router.beforeEach(async (to, from, next) => {
    if (to.name == "error-404" || from.name == "login")
        next()
    if (from.name !== null) {
        let accessList = cookies.get("accessList");
        if (to.meta.menuFeature !== undefined) {
            let menuFeature = to.meta.menuFeature;
            if (accessList.length == 0) {
                next({ name: 'error-404' })
            }
            for (let i = 0; i < menuFeature.length; i++) {
                if (accessList[menuFeature[i]] !== undefined) {
                    checkAuthenticate(to, next);
                    break;
                } else if (i == menuFeature.length - 1) {
                    next({ name: 'error-404' })
                }
            }
        } else {
            checkAuthenticate(to, next);
        }
    } else {
        checkAuthenticate(to, next);
    }
})

export default router;