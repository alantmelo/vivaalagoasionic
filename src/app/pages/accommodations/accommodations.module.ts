import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { AccommodationsPageRoutingModule } from './accommodations-routing.module';

import { AccommodationsPage } from './accommodations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccommodationsPageRoutingModule
  ],
  declarations: [AccommodationsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccommodationsPageModule {}
