import {Component, OnInit, Input, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {State} from '../state';
import {Album} from '../album/albumInterface';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

@Injectable()
export class AlbumsComponent implements OnInit {
  @Input() title: string;
  @Input() posterUrl: string;
  @Input() thumbnailUrl: string;
  private albums: Album[];
  private loader: boolean = true;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe((data: []) => {
      State.albums.next(data);
      State.loader.next(false);
      this.loader = false;
    });
    State.albums.subscribe((data: Album[]) => this.albums = data);
    State.loader.subscribe((data: boolean) => this.loader = data);

  }

}
