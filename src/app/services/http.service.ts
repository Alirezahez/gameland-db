import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {forkJoin, map, Observable} from "rxjs";
import {environment as env} from 'src/environments/environment'
import {APIResponse, Game} from "../models";
import {DetailsComponent} from "../components/details/details.component"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponse<Game>> {
    let params = new HttpParams().set('ordering', ordering);

    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);

    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {params: params})
  }

  getGameDetails(id: string | undefined) : Observable<Game>{
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/games/${id}`);
    const gameTrailersRequest = this.http.get(`${env.BASE_URL}/games/${id}/movies`);
    const gameScreenshotRequest = this.http.get(`${env.BASE_URL}/games/${id}/screenshots`);

    return forkJoin({
      gameInfoRequest,
      gameTrailersRequest,
      gameScreenshotRequest,
    }).pipe(map((resp:any)=>{
      return{
        ...resp['gameInfoRequest'],
        screenshots: resp['gameScreenshotRequest']?.results,
        trailers: resp['gameTrailersRequest']?.results,
      };
    })

    );
  }

}
