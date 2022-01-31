import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-with-resolver',
  templateUrl: './with-resolver.component.html',
  styleUrls: ['./with-resolver.component.scss']
})
export class WithResolverComponent implements OnInit {
  public users: any[] = [];
  public pokemon: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    debugger;
    this.users = this.route.snapshot.data['users'];
    this.pokemon = this.route.snapshot.data['pokemon'];
  }
}
