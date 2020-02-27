import {Observable, BehaviorSubject} from 'rxjs';
import {Album} from './album/albumInterface';

export let State = {
  userName: new BehaviorSubject(''),
  password: new BehaviorSubject(''),
  albums: new BehaviorSubject([]),
  loader: new BehaviorSubject(true)
};
