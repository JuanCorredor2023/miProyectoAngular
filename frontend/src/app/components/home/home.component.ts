import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { Menu } from 'src/app/models/Menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
    this.getAllMenus()
  }

  getAllMenus(){
    this.menuService.getAllMenus().subscribe(
      (res)=> {
         this.menuService.menus = res.menu
      }
    )
  }

}
