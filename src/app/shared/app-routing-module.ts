import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductsComponent } from "./components/products/products.component";
import { UsersComponent } from "./components/users/users.component";
import { UserComponent } from "./components/users/user/user.component";
import { EditUserComponent } from "./components/users/edit-user/edit-user.component";
import { ProductComponent } from "./components/products/product/product.component";
import { EditProductComponent } from "./components/products/edit-product/edit-product.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthGaurd } from "./services/auth.gaurd";
import { AuthComponent } from "./components/auth/auth.component";
import { UserRoleGuard } from "./services/user-role.guard";
import { FairDashboardComponent } from "./components/fair-dashboard/fair-dashboard.component";
import { FairDetailsComponent } from "./components/fair-details/fair-details.component";
import { ProductResolverService } from "./services/productResolver.service";
import { UserResolverService } from "./services/userResolver.service";
import { CompDeactiveGuard } from "./services/comp-deactive.guard";


const appRoutes : Routes = [
    {
        path : '',
        component : AuthComponent
    },
    {
        path : 'home',
        component : HomeComponent,
        data : {
            userRole : ["buyer", "admin"]
        },
        canActivate : [AuthGaurd]
    },
    {
        path : 'products',
        component : ProductsComponent,
        canActivate : [AuthGaurd, UserRoleGuard],
        data : {
            userRole : ["buyer", "admin", "superAdmin"]
        },
        children : [
            {
                path : 'addProduct',
                component : EditProductComponent
            },
            {
                path : ':prodId',
                component : ProductComponent,
                resolve : {
                    product : ProductResolverService
                }
            },
            {
                path : ':prodId/edit',
                component : EditProductComponent,
                canDeactivate : [CompDeactiveGuard]
            }
        ]
    },
    {
        path : 'users',
        component : UsersComponent,
        data : {
            userRole : ["admin", "superAdmin"]
        },
        canActivate : [AuthGaurd, UserRoleGuard],
        children : [
            {
                path : 'addUser',
                component : EditUserComponent
            },
            {
                path : ':userId',
                component : UserComponent,
                resolve : {
                    userObj : UserResolverService
                }
            },
            {
                path : ':userId/edit',
                component : EditUserComponent,
                canDeactivate : [CompDeactiveGuard]
            }
        ]
    },
    {
        path : 'fairs',
        component : FairDashboardComponent,
        canActivate : [AuthGaurd, UserRoleGuard],
        data : {
            userRole : ["superAdmin"]
        },
        children : [
            {
                path : ':fairId',
                component : FairDetailsComponent
            }
        ]
    },
    {
        path : 'page-not-found',
        component : PageNotFoundComponent,
        data : {
            msg : 'Page not found!!!'
        }
    },
    {
        path : '**',
        redirectTo : 'page-not-found'
    }
]
@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRoutingModule{


    constructor() {

    }
}