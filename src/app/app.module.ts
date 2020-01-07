import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsComponent } from "./settings/settings.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { DetailsComponent } from "./details/details.component";
import { TrainersComponent } from './trainers/trainers.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    SettingsComponent,
    NotificationsComponent,
    DetailsComponent,
    TrainersComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
