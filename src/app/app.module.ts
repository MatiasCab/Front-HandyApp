import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ProblemsModule } from './problems/problems.module';
import { MyProblemsModule } from './my-problems/my-problems.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ProblemsModule,
    MyProblemsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
