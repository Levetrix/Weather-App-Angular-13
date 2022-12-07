import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
// Material - START
import { MatRadioModule } from '@angular/material/radio';
// Material - END
import { AppComponent } from './app.component';
import { AppHomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '**',
    component: AppHomeComponent,
  },
  {
    path: 'home',
    component: AppHomeComponent,
  },
  {
    path: '',
    component: AppHomeComponent,
  },
  {
    path: 'location/:id',
    component: AppHomeComponent,
  },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatRadioModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent, AppHomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
