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
    // {
    //     path: "/kpi",
    //     component: () => import('@/views/emp-master-data/KpiMasterTable.vue'),
    //     name: "kpi",
    //     meta: {
    //         layout: 'emps',
    //         menuFeature: ['KPI_COMPANY', 'KPI_DEPARTMENT', 'KPI_EMPLOYEE']
    //     },
    // },
    // {
    //     path: "/subordinate-submitted-score",
    //     component: () => import('@/views/emp-performance-score/SubordinateSubmittedScoreTable.vue'),
    //     name: "subordinate-submitted-score",
    //     meta: {
    //         layout: 'emps',
    //     },
    // },
    // {
    //     path: "/subordinate-submitted-score/:action",
    //     component: () => import('@/components/crud-layout/emp-perfomance-score/subordinate-submitted-score/SubordinateSubmittedScoreCrud.vue'),
    //     props: r => ({ ...r.query, ...r.params }),
    //     name: "subordinate-submitted-score-crud",
    //     meta: {
    //         layout: 'emps',
    //     },
    // },
    // {
    //     path: "/submit-score",
    //     component: () => import('@/views/emp-performance-score/SubmitScoreTable.vue'),
    //     name: "submit-score",
    //     meta: {
    //         layout: 'emps',
    //     },
    // },
    // {
    //     path: "/submit-score/:action",
    //     component: () => import('@/components/crud-layout/emp-perfomance-score/submit-score/SubmitScoreCrud.vue'),
    //     props: r => ({ ...r.query, ...r.params }),
    //     name: "submit-score-crud",
    //     meta: {
    //         layout: 'emps',
    //     },
    // },
    // {
    //     path: "/objective",
    //     component: () => import('@/views/emp-master-data/ObjectiveMasterTable.vue'),
    //     name: "objective",
    //     meta: {
    //         layout: 'emps',
    //         menuFeature: ['OBJECTIVE_COMPANY', 'OBJECTIVE_DEPARTMENT', 'OBJECTIVE_EMPLOYEE']
    //     },
    // },
    // {
    //     path: "/perspective",
    //     component: () => import('@/views/emp-master-data/PerspectiveMasterTable.vue'),
    //     name: "perspective",
    //     meta: {
    //         layout: 'emps',
    //         menuFeature: ['PERSPECTIVE']
    //     },
    // },
    // {
    //     path: "/cascading-company",
    //     component: () => import('@/views/emp-master-setup/CascadingCompanyTable.vue'),
    //     name: "cascading-company",
    //     meta: {
    //         layout: 'emps',
    //         menuFeature: ['COMPANY_STRATEGY']
    //     },
    // },
    // {
    //     path: "/approval-setup",
    //     component: () => import('@/views/ApprovalSetupTable.vue'),
    //     name: "approval-setup",
    //     meta: {
    //         layout: 'emps',
    //     },
    // },
    // {
    //     path: "/employee-scoring-setup",
    //     component: () => import('@/views/emp-master-setup/EmployeeScoringSetupTable.vue'),
    //     name: "employee-scoring-setup",
    //     meta: {
    //         layout: 'emps',
    //         menuFeature: ['EMPLOYEE_SCORING_SETUP']
    //     },
    // },
    // {
    //     path: "/employee-scoring-setup/:action",
    //     component: () => import('@/components/crud-layout/emp-master-setup/employee-scoring-setup/EmployeeScoringSetupCrud.vue'),
    //     name: "employee-scoring-setup-crud",
    //     meta: {
    //         layout: 'emps',
    //         menuFeature: ['EMPLOYEE_SCORING_SETUP']
    //     },
    // },
    // {
    //     path: "/balanced-scorecard/",
    //     component: () => import('@/views/emp-master-setup/BalancedScorecardTable.vue'),
    //     name: "balanced-scorecard",
    //     meta: {
    //         layout: 'emps',
    //         menuFeature: ['BSC']
    //     },
    // },
    // {
    //     path: "/balanced-scorecard/:action",
    //     component: () => import('@/components/crud-layout/emp-master-setup/balanced-scorecard/BalancedScorecardCrud.vue'),
    //     props: r => ({ ...r.query, ...r.params }),
    //     name: "balanced-scorecard-crud",
    //     meta: {
    //         layout: 'emps',
    //         menuFeature: ['BSC']
    //     },
    // },
    // {
    //     path: "/menu-access",
    //     component: () => import('@/views/MenuAccessManagementTable.vue'),
    //     name: "menu-access",
    //     meta: {
    //         layout: 'emps',
    //         menuFeature: ['MENU_ACCESS']
    //     },
    // },
    // {
    //     path: "/data-access",
    //     component: () => import('@/views/DataAccessManagementTable.vue'),
    //     name: "data-access",
    //     meta: {
    //         layout: 'emps',
    //         menuFeature: ['DATA_ACCESS']
    //     },
    // },
    // {
    //     path: "/employee",
    //     component: () => import('@/views/EmployeeTable.vue'),
    //     name: "employee",
    //     meta: {
    //         layout: 'emps',
    //         // menuFeature: ['EMPLOYEE']
    //     },
    // },
    // {
    //     path: "/employee_external",
    //     component: () => import('@/views/EmployeeExternalTable.vue'),
    //     name: "employee_external",
    //     meta: {
    //         layout: 'emps',
    //         // menuFeature: ['EMPLOYEE_EXTERNAL']
    //     },
    // },
    // {
    //     path: "/organization",
    //     component: () => import('@/views/OrganizationTable.vue'),
    //     name: "organization",
    //     meta: {
    //         layout: 'emps',
    //         menuFeature: ['ORGANIZATION']
    //     },
    // },
    // {
    //     path: "/profile_account/:action",
    //     component: () => import('@/views/Profil.vue'),
    //     name: "profile_account",
    //     props: r => ({ ...r.query, ...r.params }),
    //     meta: {
    //         layout: 'emps',
    //     },
    // },
    // {
    //     path: "/profile_account/:type/:employe_name",
    //     component: () => import('@/views/Profil.vue'),
    //     name: "profile_account",
    //     props: r => ({ ...r.query, ...r.params }),
    //     meta: {
    //         layout: 'emps',
    //     },
    // },
    // {
    //     path: '/:catchAll(.*)*',
    //     component: () => import('@/views/PageNotFound.vue'),
    //     name: "error-404",
    //     meta: {
    //         layout: 'emps',
    //     },
    // },
    // // {
    // //     path: '/profil/:action',
    // //     component: () => import('@/views/Profil.vue'),
    // //     props: r => ({ ...r.query, ...r.params }),
    // //     name: "profil",
    // //     meta: {
    // //         layout: 'emps',
    // //     },
    // // },
    // {
    //     path: "/profile",
    //     component: () => import('@/views/Profil.vue'),
    //     name: "profil",
    //     props: r => ({ ...r.query, ...r.params }),
    //     meta: {
    //         layout: 'emps'
    //     },
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