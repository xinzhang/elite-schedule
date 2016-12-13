import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {TeamHomePage} from '../pages';

@Component({
  templateUrl: 'build/pages/teams/teams.html',
})
export class TeamsPage {
  constructor(private nav: NavController) {}

  teams = [
    {id:1, name: 'MC Elite'},
    {id:2, name: 'Team Takeover'},
    {id:3, name: 'DC Thunder'}
  ];

  itemTapped($event, team) {
   this.nav.push(TeamHomePage, team); 
  }
}
