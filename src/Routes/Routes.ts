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
              navUiStore.pathname = '/students/studentlist';
              await import('../Components/Students/StudentList/StudentList');
              await store.studentStore.LoadStudentList();
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
        component: 'kurs-app',
        action: async () => {
          navUiStore.pathname = '/teachers';
        }
      },
      {
        path: "parents",
        component: 'kurs-app',
        action: async () => {
          navUiStore.pathname = '/parents';
        }
      },
      {
        path: "courses",
        component: 'kurs-app',
        action: async () => {
          navUiStore.pathname = '/courses';
        }
      }
    ],
  },
];

const outlet = document.getElementById("outlet");
export const router = new Router(outlet);
router.setRoutes(routes);
