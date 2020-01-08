import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { DetailsComponent } from './details/details.component';
import { TrainersComponent } from './trainers/trainers.component';
import { DayComponent } from './day/day.component';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    SettingsComponent,
    NotificationsComponent,
    DetailsComponent,
    TrainersComponent,
    DayComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcJHbJxy9UThin8GsQDF3K4xtmHwFLjy8' // apiKey is required
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
