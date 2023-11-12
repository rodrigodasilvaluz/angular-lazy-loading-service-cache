import { Component, OnDestroy, OnInit } from '@angular/core';
import { ObsHomeInterface } from 'src/app/shared/interfaces/home.interfaces';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private homeService: HomeService) {}

  private homeSub: Subscription | undefined;
  public home: ObsHomeInterface = {};
  public refresh: boolean = false;

  ngOnInit(): void {
    this.getHome();
  }

  getHome(): void {
    this.homeSub = this.homeService.getHome()
    .subscribe({
      next: (home) => this.home = home,
      error: (err) => this.home.error = err,
      complete: () => console.log('Home request completed!'),
    });
  }

  getHomeWithRefresh(): void {
    this.homeSub = this.homeService.getHomeWithRefresh(this.refresh)
    .subscribe({
      next: (home) => this.home = home,
      error: (err) => this.home.error = err,
      complete: () => console.log('Home request with param refresh completed!'),
    });
  }

  ngOnDestroy(): void {
    this.homeSub?.unsubscribe();
  }
}
