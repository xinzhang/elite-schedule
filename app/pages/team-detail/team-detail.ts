import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TeamDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/team-detail/team-detail.html',
})
export class TeamDetailPage {
  team: any;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.team = navParams.data;
     
  }
}
