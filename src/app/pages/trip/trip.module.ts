import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripPageRoutingModule } from './trip-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TripPage } from './trip.page';
import { TripItemModule } from 'src/app/components/trip-item/trip-item.module'; 
import { AddItemTripModalComponent } from 'src/app/components/add-item-trip-modal/add-item-trip-modal.component';
import { TripEditModalComponent } from 'src/app/components/trip-edit-modal/trip-edit-modal.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripPageRoutingModule,
    TripItemModule, 
    ReactiveFormsModule
  ],
  declarations: [TripPage, AddItemTripModalComponent, TripEditModalComponent]
})
export class TripPageModule {}
