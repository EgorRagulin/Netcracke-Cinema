import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LoadingService} from "../../../../services/loading/loading.service";
import {StorageService} from "../../../../services/security/storage.service";
import {Router} from "@angular/router";
import {UserModel} from "../../../../models/user.model";
import {UploadPictureService} from "../../../../services/upload-picture/upload-picture.service";
import {Picture} from "../../../../models/picture/picture";
import {FullUserModel} from "../../../../models/full-models/full.user.model";
import validate = WebAssembly.validate;
import {StorageLoginModel} from "../../../../models/storage/storage.login.model";
import {LoginModel} from "../../../../models/login.model";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];
  public userModel: UserModel = new UserModel();
  public isLoading: boolean = false;

  private _selectedPicture: FormData;

  constructor(private loadingService: LoadingService,
              public storageService: StorageService,
              private uploadPictureService: UploadPictureService,
              private router: Router) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  public createUser(): void {
    this.isLoading = this.loadingService.changeLoadingStatus(true);

    this.uploadPicture();

  }

  public setSelectedPicture(selectedPicture: FormData) {
    this._selectedPicture = selectedPicture;
  }

  private uploadPicture() {
    if (this._selectedPicture) {
      this._subscriptions.push(
        this.uploadPictureService.getPictureUrl(this._selectedPicture)
          .subscribe((picture: Picture) => {
            if (picture.pictureUrl) this.userModel.pictureUrl = picture.pictureUrl;
            console.log(this.connectLoginFromStorageToUserModel());
            this.isLoading = this.loadingService.changeLoadingStatus(false);
          }, error => {
            alert(error.message);
            this.isLoading = this.loadingService.changeLoadingStatus(false);
          })
      );
    }
    else this.isLoading = this.loadingService.changeLoadingStatus(false);
  }

  private connectLoginFromStorageToUserModel(): FullUserModel {
    let storageLogin: StorageLoginModel = this.storageService.getCurrentLogin();
    let loginModel: LoginModel = new LoginModel();
    loginModel.id = storageLogin.id;
    return new FullUserModel(this.userModel, loginModel);
  }
}
