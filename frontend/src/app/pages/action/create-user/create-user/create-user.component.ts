import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {LoadingService} from "../../../../services/loading/loading.service";
import {StorageService} from "../../../../services/security/storage.service";
import {Router} from "@angular/router";
import {UserModel} from "../../../../models/user.model";
import {UploadPictureService} from "../../../../services/upload-picture/upload-picture.service";
import {PictureModel} from "../../../../models/picture/picture.model";
import {FullUserModel} from "../../../../models/full-models/full.user.model";
import {LoginModel} from "../../../../models/login.model";
import {UserService} from "../../../../services/user/user.service";
import {finalize} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Validation} from "../../../../form-validation/validation";
import {FormValidationService} from "../../../../services/form-validation/form-validation.service";
import {CurrentUserService} from "../../../../services/current-user/current.user.service";
import {CurrentLoginService} from "../../../../services/current-login/current-login.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, OnDestroy {
  private _subscriptions: Subscription[] = [];

  private login: LoginModel;
  public user: UserModel = new UserModel();

  public createUserForm: FormGroup;
  public validationMessages = Validation.validationMessages;
  private _selectedPicture: FormData;

  public isLoading: boolean;

  constructor(private usersService: UserService,
              public currentLoginService: CurrentLoginService,
              public currentUserService: CurrentUserService,

              private loadingService: LoadingService,

              private fb: FormBuilder,
              public formValidationService: FormValidationService,
              private uploadPictureService: UploadPictureService,

              private router: Router) { }

  ngOnInit(): void {
    this._subscriptions.push(
      this.currentLoginService.getCurrentLogin().subscribe(currentLogin => this.login = currentLogin)
    );
    this.createCreateUserForms();
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(subscription => subscription.unsubscribe())
  }

  private createCreateUserForms() {
    this.createUserForm = this.fb.group({
      firstName: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern(Validation.validatorsPatterns.cyrillic_latin_numbers)
        ]],
      secondName: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          Validators.pattern(Validation.validatorsPatterns.cyrillic_latin_numbers)
        ]],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]],
      phoneNumber: ['',
        [
          Validators.required,
          Validators.pattern(Validation.validatorsPatterns.phone_number)
        ]]
    });
  }

  public createUser(): void {
    if (this.createUserForm.valid) {
      this.isLoading = this.loadingService.changeLoadingStatus(true);

      this.uploadPicture();
    }
    else alert('Ах ты хитрый жук');
  }

  public setSelectedPicture(selectedPicture: FormData) {
    this._selectedPicture = selectedPicture;
  }

  private uploadPicture() {
    if (this._selectedPicture) {
      this._subscriptions.push(
        this.uploadPictureService.getPictureUrl(this._selectedPicture)
          .subscribe((picture: PictureModel) => {
            if (picture.pictureUrl) this.user.avatar = picture.pictureUrl;
            let fullUser = new FullUserModel(this.user, this.login)
            this.saveUserInDb(fullUser);
          }, error => {
            alert(error.message);
            this.isLoading = this.loadingService.changeLoadingStatus(false);
          })
      );
    }
    else this.isLoading = this.loadingService.changeLoadingStatus(false);
  }

  private saveUserInDb(fullUser: FullUserModel): void {
    this.usersService.saveUserInDb(fullUser)
      .pipe(finalize(() => this.isLoading = this.loadingService.changeLoadingStatus(false)))
      .subscribe((savedUser: FullUserModel) => this.router.navigate(['my-profile']),
          error => alert(error.message));
  }
}
