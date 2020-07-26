import { Component, OnInit } from '@angular/core';
import { TagDataHolder, TagType } from '../models/tag-data-holder';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {
  tags: Array<TagDataHolder>;
  content: string;
  constructor() {


    this.content = `בבקשה קרא את תנאי השימוש בזהירות לפני השימוש באפליקציה. 
הגישה והשימוש באפליקצה מהווים קבלת התנאים והמגבלות  הנל
`
  }

  ngOnInit() {
    this.tags = [
      {
        tag: "תוכן",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "הרחב דבר נותנת את האפשרות להגהה של מזזות ותפילין ליותרות וחסרות",
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      },

      {
        tag: "הצהרות",
        type: TagType.TITLE,
        subTags: [
          {
            tag: `בעזרת האפליקציה ניתן לעשות הגהה לתפילין ומזוזות אך אנחנו לא מתחייבים להצלחה של מאה אחוז לכן ההוגה מתבקש
            לא לסמוך על האפליקציה ככלי מוחלט אלה רק ככלי עזר ועיקר העבודה והמשלק מונחות על כתפיו`,
            subTags: [],
            type: TagType.SUB_TITLE
          },
        ]
      },

      {
        tag: "עדכונים",
        type: TagType.TITLE,
        subTags: [
          {
            tag: "אנחנו לוקחם לעצמנו את הראשון לעדכן את המסמך הזה מעט לעט מתי שנרצה",
            subTags: [],
            type: TagType.SUB_TITLE
          },
          {
            tag: "המשתמש צריך לבדוק את המסמך מדי פעם כדי לוודא אם משהו השתנה",
            subTags: [],
            type: TagType.SUB_TITLE
          }
        ]
      }
    ]
  }

}
