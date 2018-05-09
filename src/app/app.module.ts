import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

import { LineChartComponent } from './line-chart/line-chart.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { GuageChartComponent } from './guage-chart/guage-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    AreaChartComponent,
    GuageChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTabsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
