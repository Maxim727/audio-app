import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AudioTrack } from '../../models/audio-track.model';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls:  ['./audio-player.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioPlayerComponent {
  @Input() track!: AudioTrack;
}
