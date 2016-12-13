import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TournamentsPage} from '../pages';

@Component({
    templateUrl: 'build/pages/my-teams/my-teams.page.html'
})
export class MyTeamsPage {
    constructor(private navController:NavController){}

    gotoTournament() {
        console.log('navigate');
        this.navController.push(TournamentsPage);
    }
}