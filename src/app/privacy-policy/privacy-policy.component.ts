import { Component, OnInit } from '@angular/core';
import { TagDataHolder, TagType } from '../models/tag-data-holder';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  tags: Array<TagDataHolder>;
  constructor() {
    this.initData();
   }

  ngOnInit() {
    
  }
  initData() {
    this.tags = [
      {
        tag: "הקדמה",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "הרחב דבר זהוי אפליקצית הגהה לתמשישי קדושה כגון תפילין ומזוזות",
            subTags: [],
            type: TagType.SUB_TITLE
          }
        ]
      },

      {
        tag: "מידע אישי",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "אנחנו משתמשים באימיל כחשבון",
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      },

      {
        tag: "שיתוף מידע עולמי",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "המידע המגיע לאפליקציה נשלח לשרת שלא בהכרח נמצא בארץ",
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      },

      {
        tag: "שמירת המידע",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "המידע שנשלח לשרת יכול להישמר",
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      },

      {
        tag: "הבטחת מידע אישי",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "אנו לא נקח אחריות על כל המידע שעובר באפליקציה בין אם זה נגנב או אבד",
            subTags: [],
            type: TagType.SUB_TITLE
          }, 
          {
            tag: "כל המידע שנמצאת באפליקציה היא באחריות המשתמש בלבד",
            subTags: [],
            type: TagType.SUB_TITLE
          }, 
          {
            tag: "המשתמש אחראי לשמור על המידע בביטחה",
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      },

      {
        tag: "תיקונים",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "אנו שומרים לעצמנו את הזכות לעדכן את הגרסה של המסמך הנל בכל עת שנרצה",
            subTags: [],
            type: TagType.SUB_TITLE
          }, 
          {
            tag: ".תתבקש לבקר את המסמך מדי פעם כדי לבדוק אם השתנו דברים",
            subTags: [],
            type: TagType.SUB_TITLE
          }, 
          {
            tag: "אנחנו עשויים להודיע על השינויים",
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      }
    ]
  }
}


