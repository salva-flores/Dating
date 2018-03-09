import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../../_models/Photo';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../environments/environment';
import { AuthService } from '../../_services/auth.service';
import { UserService } from '../../_services/user.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import * as _ from 'underscore';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  currentMain: Photo;
  @Output() getMemberPhotoChange = new EventEmitter<string>();

  constructor(private authService: AuthService, private userService: UserService, private izi: Ng2IzitoastService) {}

  ngOnInit() {this.initializaUploader(); }

  public fileOverBase(e: any): void {this.hasBaseDropZoneOver = e; }
  initializaUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        const res: Photo = JSON.parse(response);
        const photo = {id: res.id, url: res.url, dateAdded: res.dateAdded, description: res.description, isMain: res.isMain};
        this.photos.push(photo);
      }
    };
  }
  setMainPhoto(photo: Photo) {
    this.userService.setMainPhoto(this.authService.decodedToken.nameid, photo.id).subscribe(
      () => {
        this.currentMain = _.findWhere(this.photos, {isMain: true});
        this.currentMain.isMain = false;
        photo.isMain = true;
        this.authService.changeMemberPhoto(photo.url);
        this.authService.currentUser.photoUrl = photo.url;
        localStorage.setItem('user', JSON.stringify(this.authService.currentUser));
        console.log('foto establecida satisfactoriamente!');
      },
      error => {this.izi.error({position: 'topRight', title: 'ERROR!', message: 'No se pudo establecer... '}); }
    );
  }
  deletePhoto(id: number) {
    this.userService.deletePhoto(this.authService.decodedToken.nameid, id).subscribe(() => {
      this.photos.splice(_.findIndex(this.photos, { id: id}), 1);
      this.izi.success({message: 'Foto eliminada'}); });
    // this.izi.question({
    //   title: 'ELIMINAR', message: 'Seguro que desea eliminar la fotografía?',
    //   buttons: [
    //     ['<button><b>SI</b></button>', function () {
    //       console.log('SI... borrar');
    //       this.userService.deletePhoto(this.authService.decodedToken.nameid, id).subscribe(() => {
    //         this.photos.splice(_.findIndex(this.photos, { id: id}), 1);
    //         this.izi.success({message: 'Foto eliminada'});
    //       });
    //      }, true],
    //     ['<button>NO</button>', function (instance, toast) {instance.hide({ transitionOut: 'fadeOut' }, toast, 'button'); }]
    //   ],
    // });
  }
}
