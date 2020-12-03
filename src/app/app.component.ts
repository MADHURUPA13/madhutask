import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchText: string;

  title = 'myapp';
  addingformdata: FormGroup;
  arr:FormArray;
  formdata:any;
  namee ;
  ageee;
  genderr;
  hobbiesss;
  arrr;
  arrayy = [];
  constructor(private formbuilder: FormBuilder) {

  }
  ngOnInit() {
    this.addingformdata = this.formbuilder.group({
     name: ['', [Validators.required]],
     age: ['', [Validators.required]],
     gender: ['', [Validators.required]],
     check:['',[Validators.required]],
     arr: this.formbuilder.array([this.createHobbies()])
    })
 
  }

  createHobbies() {
    return this.formbuilder.group ({
      hobbies: ['', [Validators.required]]
    });
  }

  // getdataa() {
  //  this.arrr = this.addingformdata.push('');
  // //  this.formdata = this.addingformdata.value;
  // //  this.namee = this.formdata.name;
  // //  this.ageee = this.formdata.age;
  // //  this.genderr= this.formdata.gender;
  // //  this.hobbiesss = this.formdata.arr[0].hobbies;

  // }
  addItemhobbies() {
    this.arr = this.addingformdata.get('arr') as FormArray;
    this.arr.push(this.createHobbies());
  }
  submitformdata() {
   this.arrayy.push(this.addingformdata.value);
   console.log(this.arrayy,"sfdfd")
  }
  sdf;
  deleteRow(d){
    const index = this.arrayy.indexOf(d);
    this.arrayy.splice(index, 1);
}
  // removehobbies(index) {
  //   const arr = this.addingformdata.get('arr') as FormArray
  //   arr.removeAt(index);
  // }
  resetformdata() {
    this.addingformdata.reset();
  }
}
