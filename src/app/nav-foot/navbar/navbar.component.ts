import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TokenService} from "../../service/token.service";
import {Router} from "@angular/router";
import {CommonService} from "../../service/common.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() change?: CommonService;
  private current?: SimpleChanges;
  name: string | null = "";
  avatar: string | null = "";
  checkLogin = false;

  constructor(private tokenService: TokenService, private router: Router,
              private commonService: CommonService) {
  }

  ngOnInit(): void {
    console.log(this.current)
    console.log(this.router.url)
    if (this.tokenService.getToken()) {
      console.log("Inhere")
      this.name = this.tokenService.getName();
      this.avatar = this.tokenService.getAvatar();
      this.checkLogin = true;
    }
  }

  logout() {
    sessionStorage.clear();
    this.checkLogin = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes != this.current)
    // @ts-ignore
    if (changes.valueOf() != this.current) {
      this.current = changes;
      console.log("Onchange")
    }
  }
}
