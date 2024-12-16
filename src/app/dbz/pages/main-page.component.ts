import { Component } from "@angular/core";
import { DbzService } from "../service/dbz.service";

@Component({
  selector: 'app-dbz-main-name',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{
  constructor( public dbzservice: DbzService){}
}
