import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {UploadPictureService} from "../../../../services/upload-picture/upload-picture.service";

@Component({
  selector: 'app-upload-picture',
  templateUrl: './upload-picture.component.html',
  styleUrls: ['./upload-picture.component.css']
})
export class UploadPictureComponent implements OnInit {
  @Output() selectPicture = new EventEmitter();
  @Input() pictureHeight: number = 200;
  private _selectedFile;
  public imgURL;

  constructor(private _uploadPictureService :UploadPictureService) { }

  ngOnInit(): void {
  }

  public onPictureChanged(event) {
    this._selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

    this.emitSelectedPicture();
  }

  private emitSelectedPicture(): void {
    const selectedPicture = new FormData();
    selectedPicture.append('picture', this._selectedFile, this._selectedFile.name);
    this.selectPicture.emit(selectedPicture);
  }
}
