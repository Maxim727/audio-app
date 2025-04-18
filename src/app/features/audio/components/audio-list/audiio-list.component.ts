import { Component, OnInit } from '@angular/core';
import { AudioTrack } from '../../models/audio-track.model';
import { AudioService } from '../../services/audio.service';

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls:  ['./audio-list.component.css']
})
export class AudioListComponent implements OnInit {
  audioTracks: AudioTrack[] = [];
  displayedColumns : any[] = ['name', 'fileName'];
  selectedTrack: AudioTrack | null = null;
  clickedRows = new Set<AudioTrack>();

  constructor(private audioService: AudioService) {}

  ngOnInit(): void {
    this.audioService.tracks$.subscribe((tracks) => {
      this.audioTracks = tracks ?? [];
    });
  }

  onSelectTrack(track: AudioTrack): void {
    console.log('track: ', track)
    this.selectedTrack = track;

  }
}
