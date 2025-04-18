import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioListComponent } from './components/audio-list/audiio-list.component';
// import { AudioListComponent } from './components/audio-list/audio-list.component';

const routes: Routes = [
  { path: 'audio-list', component: AudioListComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudioRoutingModule {}
