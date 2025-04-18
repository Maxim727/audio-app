import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './components/audio-player/audio-player.component';
import { AudioRoutingModule } from './audio-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { AudioListComponent } from './components/audio-list/audiio-list.component';

@NgModule({
  declarations: [
    AudioListComponent,
    AudioPlayerComponent
  ],
  imports: [
    CommonModule,
    AudioRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class AudioModule { }
