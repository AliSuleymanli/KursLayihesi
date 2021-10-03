import { Router } from "@vaadin/router";
import { navUiStore } from "../Elements/Navs/NavUIStore";
import "../kurs-app";
import { store } from "../Store/Store";

const routes = [
  {
    path: "/",
    component: "kurs-app",
    children: [
      {
        path: "students",
        component: 'students-container',
        action: async () => {
          await import('../Components/Students/StudentsContainer/StudentsContainer');
        },
        children: [
          {
            path: "",
            redirect: "students/studentlist"
          },
          {
            path: "studentlist",
            component: "student-list",
            action: async () => {
              await import('../Components/Students/StudentList/StudentList');
              await store.studentStore.LoadStudentList();
              navUiStore.pathname = '/students/studentlist';
            }
          },
          {
            path: "newstudent",
            component: "new-student",
            action: async () => {
              await store.RegionStore.init();
              await store.StudentStausStore.init();
              await store.StudentSourceStore.init();
              await import('../Components/Students/NewStudent/NewStudent');
              store.studentStore.resetNewStudent();
            }
          },
          {
            path: "studentdept",
            component: "student-depts",
            action: async () => {
              await import('../Components/Students/StudentDepts/StudentDepts');
            }
          },
        ]
      },
      {
        path: "teachers",
        component: 'kurs-app'
      },
      {
        path: "parents",
        component: 'kurs-app'
      },
      {
        path: "courses",
        component: 'kurs-app'
      }
    ],
  },
];

const outlet = document.getElementById("outlet");
export const router = new Router(outlet);
router.setRoutes(routes);
