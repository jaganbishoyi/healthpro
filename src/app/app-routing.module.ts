import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DetailsComponent } from "./details/details.component";
import { SettingsComponent } from "./settings/settings.component";
import { NotificationsComponent } from "./notifications/notifications.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "details",
    component: DetailsComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  },
  {
    path: "notifications",
    component: NotificationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
