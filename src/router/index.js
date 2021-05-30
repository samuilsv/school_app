import { createRouter, createWebHashHistory } from "vue-router";
import HomeBeforeLog from "../views/HomeBeforeLog.vue";

const routes = [
  {
    path: "/",
    name: "HomeBeforeLog",
    component: HomeBeforeLog,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/log",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "log" */ "../views/Login.vue"),
  },
  {
    path: "/reg",
    name: "Register",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "reg" */ "../views/Register.vue"),
  },
  {
    path: "/studentLog",
    name: "StudentLog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "StudentLog" */ "../views/student/StudentLog.vue"
      ),
  },
  {
    path: "/teacherLog",
    name: "TeacherLog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "TeacherLog" */ "../views/teacher/TeacherLog.vue"
      ),
  },
  {
    path: "/homeAfterLogStudent",
    name: "HomeAfterLogStudent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "HomeAfterLogStudent" */ "../views/student/HomeAfterLogStudent.vue"
      ),
  },
  {
    path: "/homeAfterLogTeacher",
    name: "HomeAfterLogTeacher",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "HomeAfterLogTeacher" */ "../views/teacher/HomeAfterLogTeacher.vue"
      ),
  },
  {
    path: "/test",
    name: "Test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Test" */ "../views/Test.vue"),
  },
  {
    path: "/search",
    name: "Search",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Search" */ "../views/Search.vue"),
  },
  {
    path: "/cabinetStudentStatisticWeek",
    name: "CabinetStudent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "CabinetStudent" */ "../views/student/CabinetStudent.vue"
      ),
  },
  {
    path: "/cabinetStatisticTeacher",
    name: "CabinetStatisticTeacher",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "CabinetStatisticTeacher" */ "../views/teacher/CabinetStatisticTeacher.vue"
      ),
  },
  {
    path: "/cabinetCabinetTeacher",
    name: "CabinetCabinetTeacher",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "CabinetCabinetTeacher" */ "../views/teacher/CabinetCabinetTeacher.vue"
      ),
  },
  {
    path: "/addStudent",
    name: "AddStudent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* AddStudent: "log" */ "../views/AddStudent.vue"),
  },
  {
    path: "/addClass",
    name: "AddClass",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* AddStudent: "log" */ "../views/AddClass.vue"),
  },
  {
    path: "/changeInfoStudent",
    name: "ChangeInfoStudent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* ChangeInfoStudent: "log" */ "../views/student/ChangeInfoStudent.vue"
      ),
  },
  {
    path: "/changeInfoTeacher",
    name: "ChangeInfoTeacher",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* ChangeInfoTeacher: "log" */ "../views/teacher/ChangeInfoTeacher.vue"
      ),
  },
  {
    path: "/updatePhoto",
    name: "UpdatePhoto",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* UpdatePhoto: "log" */ "../views/UpdatePhoto.vue"),
  },
  {
    path: "/changePhotoStudent",
    name: "ChangePhotoStudent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* ChangePhoto: "log" */ "../views/student/ChangePhotoStudent.vue"
      ),
  },
  {
    path: "/changePhotoTeacher",
    name: "ChangePhotoTeacher",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* ChangePhotoTeacher: "log" */ "../views/teacher/ChangePhotoTeacher.vue"
      ),
  },
  {
    path: "/deleteStudent",
    name: "DeleteStudent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* DeleteStudent: "log" */ "../views/DeleteStudent.vue"),
  },
  {
    path: "/deleteStudent",
    name: "DeleteStudent",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* DeleteStudent: "log" */ "../views/DeleteStudent.vue"),
  },
  {
    path: "/cabinetTeacherStudentClass",
    name: "CabinetTeacherStudentClass",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* CabinetTeacherStudentClass: "log" */ "../views/teacher/CabinetTeacherStudentClass.vue"
      ),
  },
  {
    path: "/cabinetTeacherStudentMonth",
    name: "CabinetTeacherStudentMonth",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* CabinetTeacherStudentMonth: "log" */ "../views/teacher/CabinetTeacherStudentMonth.vue"
      ),
  },
  {
    path: "/cabinetStudentStatisticMonth",
    name: "CabinetStudentStatisticMonth",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* CabinetStudentStatisticMonth: "log" */ "../views/student/CabinetStudentStatisticMonth.vue"
      ),
  },
  {
    path: "/testResult",
    name: "TestResult",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* TestResult: "log" */ "../views/TestResult.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
