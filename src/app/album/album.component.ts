import {Component, OnInit, Input} from '@angular/core';
import {State} from '../state';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  @Input() title: string;
  @Input() posterUrl: string;
  @Input() thumbnailUrl: string;

  constructor() {
  }

  ngOnInit() {
  }

}
