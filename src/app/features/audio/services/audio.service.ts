import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AudioTrack } from '../models/audio-track.model';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private tracksSubject = new BehaviorSubject<AudioTrack[]>([
    {
      id: 1,
      name: 'Sound 1',
      fileName: 'sound1.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      id: 2,
      name: 'Sound 2',
      fileName: 'sound2.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      id: 3,
      name: 'Sound 3',
      fileName: 'sound3.mp3',
      url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    }
  ]);

  tracks$ = this.tracksSubject.asObservable();
}
