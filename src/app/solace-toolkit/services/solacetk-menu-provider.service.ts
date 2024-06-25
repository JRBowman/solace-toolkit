import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SolacetkDevbannerComponent } from '../common/solacetk-devbanner/solacetk-devbanner.component';
import { SolacetkDialogComponent } from '../common/solacetk-dialog/solacetk-dialog.component';
import { SolacetkSearchSheetComponent } from '../common/solacetk-search-sheet/solacetk-search-sheet.component';

@Injectable({
  providedIn: 'root'
})
export class SolacetkMenuProviderService {

  // Bottom Sheet and Modal Providers:
  constructor(private _snackBar: MatSnackBar, private _bottomSheet: MatBottomSheet, private _dialog: MatDialog) { }

  // Bottom Sheet Provider Methods:
  public OpenSearchSheet(model: any[], module: string, multiple: boolean = true): void {
    let instance = this._bottomSheet.open(SolacetkSearchSheetComponent);
    instance.instance.LoadData(module, multiple);

    instance.instance.modelsSelected.subscribe((selected) => 
    {
      model = selected;
    });
    
  }

  // Dialog Provider Methods:
  public OpenDialog<T>(component: ComponentType<T>, config: MatDialogConfig): MatDialogRef<T> {
    return this._dialog.open(component, config);
  }

  public OpenSolDialog(config: MatDialogConfig = {}, data?: any): MatDialogRef<SolacetkDialogComponent> {
    config.data = data;
    return this._dialog.open(SolacetkDialogComponent, config);
  }

  // Notification Provider Methods:
  public notifications: any[] = [];
  private notifIndex: number = 0;

  public OpenBanner(message: string, actionText: string, config: MatSnackBarConfig = { duration: 5000 }): void {
    this.notifications[this.notifIndex] = this._snackBar.open(message, actionText, config);
  }

  public OpenComponentBanner<T>(component: ComponentType<T>, message: string, horizontalPosition: MatSnackBarHorizontalPosition = 'start', verticalPosition: MatSnackBarVerticalPosition = 'bottom') {
    this.notifications[this.notifIndex] = this._snackBar.openFromComponent(component, {
      horizontalPosition: horizontalPosition, verticalPosition: verticalPosition,
      data: { message: message }
    });

    //(this.notifications[this.notifIndex] as MatSnackBarRef<T>).afterDismissed().subscribe((val) => { this.notifications.splice(this.notifications.indexOf(val)) });
  }


}
