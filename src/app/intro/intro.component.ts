import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  private dialogConfig: MatDialogConfig;

  constructor(public matDialog: MatDialog) {
    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.disableClose = false;
  }

  ngOnInit(): void {}

  openLogin(){
    this.dialogConfig.id = "login";
    this.matDialog.open(LoginComponent, this.dialogConfig);
  }

  openRegister(){

  }

}
