import { NgModule } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSelectModule,
  MatInputModule,
  NgxMaterialTimepickerModule.setLocale("ru-RU"),

  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatIconModule,
  MatCheckboxModule,
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
