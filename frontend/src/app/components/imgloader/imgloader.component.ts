import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-imgloader',
  templateUrl: './imgloader.component.html',
  styleUrls: ['./imgloader.component.css']
})
export class ImgloaderComponent {
  constructor(private httpClient: HttpClient) { }

  public selectedFile;
  imgURL: any;
  receivedImageData: any;
  base64Data: any;
  convertedImage: any;

  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }


  //This part is for uploading
  onUpload() {
      const uploadData = new FormData();
      uploadData.append('myFile', this.selectedFile, this.selectedFile.name);


      this.httpClient.post('/api/movies/upload/', uploadData)
        .subscribe(
          res => {
            this.receivedImageData = res;
            this.base64Data = this.receivedImageData.picture;
            this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data;
          },
          err => console.log('Error Occured duringng saving: ' + err)
        );
    }
}
