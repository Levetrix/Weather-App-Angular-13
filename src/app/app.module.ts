import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// Material - START
import { MatRadioModule } from '@angular/material/radio';
// Material - END
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatRadioModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
