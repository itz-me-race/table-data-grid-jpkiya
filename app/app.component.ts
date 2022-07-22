import { Component,ViewChild } from '@angular/core';
import {AlertComponent} from './alert-component/alert.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild(AlertComponent) alert: AlertComponent;

  numbers =[] ;
  noOfPages : number;
  keyOfObjects;
  constructor(){
    this.noOfPages = Math.round(this.students.length / this.pageSize);
     this.numbers = Array((this.noOfPages)).fill().map((x,i)=>i);
  }

   
  showAlert() {
    this.alert.show();
  }

  handleConfirm(value){
    alert('i am handled by alert');
  this.alert.hide();
}


 students = [{
   name:"begin",
   id:20,
   age:23,
   address:"begin"
 },
 {
   name:"sneha",
   id:1,
   age:23,
   address:"chennai"
 },
 {
   name:"sruthi",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"sanjay",
   id:5,
   age:23,
   address:"chennai"
 },
 {
   name:"ram",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"balaji",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"balaqwe",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"arjun",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"krish",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"aaa",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"baadfla",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"baasfla",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"balawa",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"balawa",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"balaaaw",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"baasdfla",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"baasdfla",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"bala",
   id:20,
   age:23,
   address:"chennai"
 },{
   name:"bawaefla",
   id:20,
   age:23,
   address:"chennai"
 },
 {
   name:"baasdla",
   id:20,
   age:23,
   address:"chaennai"
 },{
   name:"bala",
   id:20,
   age:23,
   address:"chennai"
 },{
   name:"bala",
   id:20,
   age:23,
   address:"chennai"
 },{
   name:"bala",
   id:20,
   age:23,
   address:"chennai"
 },{
   name:"baasdfla",
   id:20,
   age:23,
   address:"chennai"
 },{
   name:"basdfala",
   id:20,
   age:23,
   address:"chennai"
 },{
   name:"end",
   id:0,
   age:23,
   address:"end"
 },
 ];
 pageSize= 10;
 currentPage=0;
 setPage(value){
   //alert(value);
   this.currentPage= value;
   console.log('value of current one',this.currentPage);
 }
 setPagePrev(){
   console.log('value',this.currentPage);
   if(this.currentPage != 0){
     console.log('i am here');
   this.currentPage=this.currentPage-1;
   }
 }
 setPageNext(){
    console.log('value',this.currentPage);
   if(this.currentPage < this.noOfPages-1){
   this.currentPage=this.currentPage+1;
   }
 }

sortType ='asec';
filterKeys = [];
sortKey;

filterCall(event){
  if(event.target.checked){
    this.filterKeys.push(event.target.name);
    console.log('before filter',this.filterKeys);
  }
  else{
    this.filterKeys.pop();
  }
}

sortById(value){
  this.sortKey = value;
  console.log('sort' , value);
 //this.sortType == 'asec' ? 'asec' : 'desc';
if(this.sortType == 'asec'){
  this.sortType = 'desc';
}
else{
  this.sortType ='asec';
}
}


}
