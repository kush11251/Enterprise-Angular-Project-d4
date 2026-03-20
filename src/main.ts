import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, 路由器 } from '@angular/router';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutingModule.routers)
  ]
}).catch(err => console.error(err));