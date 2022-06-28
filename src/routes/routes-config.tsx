/**
 * @description：路由配置入口文件
 * @date：2020/3/17
 */
import React from 'react';

/**
 * 注意：如果路由组件使用动态加载的话，那么下面就不要再引入组件了，否则动态加载就会失效
 * 如果项目结构简单，可以在当前文件中配置所有路由，如果结构复杂，就需要将二级路由及下层的路由单独拆分成一个个路由配置文件
 */

import App from '@src/entry/App';
import Home from '@src/views/home/Home';
import ChildOne from '@src/views/home/ChildOne';
import ChildTwo from '@src/views/home/ChildTwo';
import welcome from '@src/pages/welcome/index';
import category from '@src/pages/category/index';
import DataModel from '@src/pages/DataModeManager/DataModel';
import tagManager from '@src/pages/tagManager/tagManager';
import Login from '@src/views/login/Login';
import Register from '@src/views/register/Register';
export interface RouteConfigDeclaration {
    /**
     * 当前路由路径
     */
    path: string;
    /**
     * 当前路由名称
     */
    name?: string;
    /**
     * 是否严格匹配路由
     */
    exact?: boolean;
    /**
     * 是否需要路由鉴权
     */
    isProtected?: boolean;
    /**
     * 是否需要路由重定向
     */
    isRedirect?: boolean;
    /**
     * 是否需要动态加载路由
     */
    isDynamic?: boolean;
    /**
     * 动态加载路由时的提示文案
     */
    loadingFallback?: string;
    /**
     * 路由组件
     */
    component: any;
    /**
     * 子路由
     */
    routes?: RouteConfigDeclaration[];
}

export const routesConfig: RouteConfigDeclaration[] = [
    {
        path: '/',
        name: 'root-route',
        component: App,
        routes: [
            {
                path: '/home',
                // exact: true,
                isDynamic: true,
                // loadingFallback: '不一样的 loading 内容...',
                // component: Home,
                // component: React.lazy(
                //     () =>
                //         new Promise(resolve =>
                //             setTimeout(
                //                 () =>
                //                     resolve(
                //                       import(/* webpackChunkName: "home"*/ '@src/views/home/Home'),
                //                     ),
                //                 2000,
                //             ),
                //         ),
                // ),
                // component: React.lazy(() =>
                //     import(/* webpackChunkName: "home"*/ '@src/views/home/Home'),
                // ),
                component: Home,
                routes: [
                    {
                        path: '/home/child-one',
                        isDynamic: true,
                        // component: React.lazy(() =>
                        //     import(/* webpackChunkName: "child-one" */ '@src/views/home/ChildOne'),
                        // ),
                        component: ChildOne,
                    },
                    {
                        path: '/home/child-two',
                        isRedirect: true,
                        isDynamic: true,
                        // component: React.lazy(() =>
                        //     import(/* webpackChunkName: "child-two" */ '@src/views/home/ChildTwo'),
                        // ),
                        component: ChildTwo,
                    },
                ],
            },
            {
                path: '/admin',
                isDynamic: true,
                isRedirect: true,
                //   component: React.lazy(() =>
                //       import(
                //           /* webpackChunkName: "Admin" */
                //           '@src/pages/welcome/index'
                //       ),
                //     )
                component: welcome,
            },
            {
                path: '/category',
                isDynamic: true,
                isRedirect: true,
                //   component: React.lazy(() =>
                //       import(
                //           /* webpackChunkName: "login" */
                //           '@src/pages/category/index'
                //       ),
                //   ),
                component: category,
            },
            {
                path: '/dataModeManager',
                isDynamic: true,
                isRedirect: true,
                //   component: React.lazy(() =>
                //       import(
                //           /* webpackChunkName: "login" */
                //           '@src/pages/DataModeManager/DataModel'
                //       ),
                //   ),
                component: DataModel,
            },
            {
                path: '/TagManager',
                isDynamic: true,
                isRedirect: true,
                //   component: React.lazy(() =>
                //       import(
                //           /* webpackChunkName: "login" */
                //           '@src/pages/TagManager/tagManager'
                //       ),
                //   ),
                component: tagManager,
            },
            {
                path: '/login',
                isDynamic: true,
                isRedirect: true,
                // component: React.lazy(() =>
                //     import(
                //         /* webpackChunkName: "login" */
                //         '@src/views/login/Login'
                //     ),
                // ),
                component: Login,
            },
            {
                path: '/register',
                isDynamic: true,
                // component: React.lazy(() =>
                //     import(/* webpackChunkName: "register"*/ '@src/views/register/Register'),
                // ),
                component: Register,
            },
        ],
    },
];
