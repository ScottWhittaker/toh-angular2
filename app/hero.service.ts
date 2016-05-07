import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {

  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHero(id) {
    return Promise.resolve(HEROES)
      .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
}
