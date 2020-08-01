import { Component, OnInit } from '@angular/core';
import { BusinessOwnerService } from 'src/app/services/business-owner.service';
import { ActivatedRoute } from '@angular/router';
import { businessOwner } from 'src/app/entities/businessOwner';

@Component({
  selector: 'app-set-up-first-definition',
  templateUrl: './set-up-first-definition.component.html',
  styleUrls: ['./set-up-first-definition.component.css']
})
export class SetUpFirstDefinitionComponent implements OnInit {

  businessOwner: businessOwner = new businessOwner
  relative_path_to_images_file: string
  logo: string
  fileToUpload: File;
  was_logo_chosen: boolean

  constructor(private servB: BusinessOwnerService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      const userId = params['Email'];
      console.log(userId);
    });
    this.relative_path_to_images_file = 'http://localhost:50492/Images/'

    this.servB.getCurrentBusinessOwner()
    this.servB.currentBusinessOwnerEE.subscribe(x => {
      this.businessOwner = x
      console.log(this.businessOwner)
      if (this.businessOwner.logo == null) {
        debugger
        this.logo = this.relative_path_to_images_file + 'default_logo_2.jpg'
      }
      else{
        debugger
        this.logo = this.relative_path_to_images_file + this.businessOwner.logo
      }
    })
    // this.relative_path_to_images_file = '"../../../../../Api_Qmatic/Api_Qmatic/Images/'
   
    this.was_logo_chosen = false
    // this.logo = this.relative_path_to_images_file+'default_logo_2.jpg"'
  }

  ngOnInit() {
  }


  handleFileInput(files: FileList) {
    if (files.item(0) != null) {
      this.fileToUpload = files.item(0);
      this.was_logo_chosen = true;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.logo = event.target.result;
      }
      reader.readAsDataURL(files[0]);
    }

  }
  save() {
    this.servB.postFile(this.fileToUpload).subscribe(ok => {
      this.logo = this.relative_path_to_images_file + this.fileToUpload.name;
      console.log(this.logo);
    }, err => { console.log(err.message) });
  }
  saveAll() {
    this.businessOwner.logo = this.fileToUpload.name
    this.servB.saveAll(this.businessOwner);
  }

}
