import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpService} from '../../services/http.service';
import {APIResponse, Game} from '../../models';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy{
 public sort?: string | undefined;
 public games?: Array<Game> | undefined;
 private routeSub?: Subscription | undefined;
 private gameSub?: Subscription | undefined;



  constructor(
    private activatedRoute: ActivatedRoute,
  private router: Router,
  private httpService: HttpService
  ) { }

  ngOnInit(): void {
   this.routeSub = this.activatedRoute.params.subscribe((params: Params) =>{
      if (params['game-search']){
        this.searchGame('metacrit' , params['game-search']);
      }else{
        this.searchGame('metacrit');
      }
    });
  }

  searchGame(sort:string | undefined, search?:string) :void {
    if (!!sort) {
   this.gameSub= this.httpService.getGameList(sort,search).subscribe((gameList:APIResponse<Game>)=> {

        this.games = gameList.results;
        console.log(gameList);
      })
    }

  }

openGameDetails(id:string| undefined) : void{
    this.router.navigate(['details', id]);
}
 ngOnDestroy():void{
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
    if(this.gameSub){
      this.gameSub.unsubscribe();
    }
 }

}
