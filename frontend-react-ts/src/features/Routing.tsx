import {Navigate, RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../components/Layout";
import {TodoList} from "./todo/TodoList";
import {TodoForm} from "./todo/TodoForm";
import {ErrorPage} from "./error/ErrorPage";
import {LoginPage} from "./login/LoginPage";
import {useIsLogged} from "../hooks/useIsLogged";
import {GroupTodoList} from "./group-todo/GroupTodoList";
import {GroupTodoForm} from "./group-todo/GroupTodoForm";
import {ProfilePage} from "./profile/ProfilePage";
import {GreetingPage} from "./greeting/GreetingPage";

const publicRoutes: RouteObject[] = [
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <Navigate to="/login" replace/>
            },
            {
                path: '/greeting',
                element: <GreetingPage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: "*",
                element: <Navigate to="/login" replace/>
            }
        ]
    }
]


const privateRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/todo',
                element: <TodoList/>
            },
            {
                path: '/todo/:id',
                element: <TodoList/>
            },
            {
                path: '/todo/new',
                element: <TodoForm/>
            },
            {
                path: '/group-todo/new',
                element: <GroupTodoForm/>
            },
            {
                path: '/group-todo',
                element: <GroupTodoList />
            },
            {
                path: '/profile',
                element: <ProfilePage />
            },
            {
                path: '*',
                element: <ErrorPage/>
            }
        ]
    }
]


export const Routing = () => {
    const isLogged = useIsLogged();
    const routes = isLogged ? privateRoutes : publicRoutes;
    return useRoutes(routes)
}