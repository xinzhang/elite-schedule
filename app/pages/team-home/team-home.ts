import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {StandingsPage} from '../pages'
import {TeamDetailPage} from '../pages'

import {MyTeamsPage} from '../pages';

@Component({
  templateUrl: 'build/pages/team-home/team-home.html',
})
export class TeamHomePage {

  team: any;
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;

  constructor(private nav: NavController, private navParams: NavParams) {
    console.log(this.navParams);
    this.team = this.navParams.data;
  }
 
  goHome() {
    //this.nav.push(MyTeamsPage);
    this.nav.popToRoot()
  }

}
