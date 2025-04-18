import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudioRoutingModule } from './features/audio/audio-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/audio/audio-list', pathMatch: 'full' },
  { path: 'audio', loadChildren: () => import('./features/audio/audio.module').then(m => m.AudioModule) },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AudioRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
