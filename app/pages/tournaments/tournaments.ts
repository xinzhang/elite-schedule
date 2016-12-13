import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyTeamsPage, TeamsPage} from '../pages';

@Component({
  templateUrl: 'build/pages/tournaments/tournaments.html',
})
export class TournamentsPage {
  constructor(private nav: NavController) {}
  
  goback() {
    this.nav.pop();
  }

  itemTapped() {
    this.nav.push(TeamsPage);
  }
}
