import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { getQueryValue } from '@angular/core/src/view/query';

/**
 * Generated class for the GroupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-group',
  templateUrl: 'group.html',
})
export class GroupPage {
  // name:string;
  // Data = [
  //   {
  //     name1: "test1",
      
  //   },
  //   {
  //     name2: "test2",
   
  //   }
  // ];
  // datas = ['text1','text2','text3','text4','text5'];
  // images = ['1.jpg', '3.jpg', '4.jpg', '7.jpg', '9.jpg'];
  imgs: string;
  tet: string;
  Datas = [
    {imgs: '1.jpg', tet: 'IT Job Myanmar'},
    {imgs:'3.jpg', tet:'Job Net.com'},
    {imgs: '4.jpg', tet: 'IT Page'},
    {imgs: 'bg.jpg', tet: 'IT Job Page'},
    {imgs: 'bb.jpg', tet: 'HELLO'},
    {imgs: 'cat.png', tet: 'CUTE'},
    {imgs: 'splash1.png', tet: 'EXO'}

  ];

  
 

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupPage');
  }
  alert(){
    const actionSheet = this.actionSheetCtrl.create({
   
      buttons: [
    
        {
          icon: 'ios-bookmark-outline',
          text: 'Save post',
         
          // role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },

        {
          icon: 'ios-help-circle-outline',
          text: 'Find Support or Report Post',
        },

        
        {
          icon: 'ios-notifications-outline',
          text: 'Turn on notifications for this post',
        },
        
        {
          icon: 'ios-link-outline',
          text: 'Copy Link',
          handler: () => {
            console.log('Archive clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }


  myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "see more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "see less"; 
      moreText.style.display = "inline";
    }
  }

  search(){
    this.navCtrl.push(SearchPage);
  }
  }


