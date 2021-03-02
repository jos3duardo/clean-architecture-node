import {postGetAllAction} from "./controllers/PostGetAllAction";
import {postGetByIdAction} from "./controllers/PostGetByIdAction";
import {postSaveAction} from "./controllers/PostSaveAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/posts",
        method: "get",
        action: postGetAllAction
    },
    {
        path: "/posts/:id",
        method: "get",
        action: postGetByIdAction
    },
    {
        path: "/posts",
        method: "post",
        action: postSaveAction
    }
];