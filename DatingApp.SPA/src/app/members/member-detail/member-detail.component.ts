import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/User.service';
import { Ng2IzitoastService } from 'ng2-izitoast';
import { User } from '../../_models/User';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryAnimation } from 'ngx-gallery';
import { NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

  constructor( private userService: UserService, public izi: Ng2IzitoastService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {this.user = data['user']; });
    this.galleryOptions = [{
      width: '600px',
      height: '400px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide,
      preview: false
    }];
    this.galleryImages = this.getImages();
   }
   getImages() {
     const imageUrls = [];
     for (let i = 0; i < this.user.photos.length; i++) {
       imageUrls.push({
         small: this.user.photos[i].url,
         medium: this.user.photos[i].url,
         big: this.user.photos[i].url,
         description: this.user.photos[i].description
       });
     }
     return imageUrls;
   }

  // loadUser() {this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {this.user = user; }, error => { this.izi.error({position: 'topRight', title: 'Error!', message: error }); }); }
}
