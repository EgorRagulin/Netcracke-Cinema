import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadPictureComponent } from './upload-picture/upload-picture.component';



@NgModule({
    declarations: [UploadPictureComponent],
    exports: [
        UploadPictureComponent
    ],
    imports: [
        CommonModule
    ]
})
export class UploadPictureModule { }
