import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calender',
  templateUrl: 'calender.html',
//   styleUrls: ['calender.scss']
})
export class CalenderComponent implements OnInit {
  private year:number
  private month:number
  private dateObject
  private activeDay
  // 返回上个月份数据
  goPrev(){
    this.month--
    if(this.month==0){
      this.month=12
      this.year--
    }
    this.dateObject=this.getDatesOfMonth(this.year,this.month)

  }
  goNext(){
    this.month++
      if(this.month==13){
      this.month=1
      this.year++
    }
    this.dateObject=this.getDatesOfMonth(this.year,this.month)
  }
  // 返回指定年月的日历日期数组
  getDatesOfMonth(year:number,month:number){
    const datesArray:Array<any>=[]
    const date=new Date(year,month-1)
    const nowDay=new Date().getDate()
    const day=date.getDay()
    const lastDayOfLastMonth=new Date(year,month-1,0).getDate()
    // 加入上个月的日期
    for(let i=lastDayOfLastMonth;i>lastDayOfLastMonth-day;i--){
      datesArray.unshift({"day":i,"month":month-1,"year":year})
    }
      // 加入当月日期
      let lastDayOfNowMonth=new Date(year,month,0).getDate()
      for (let index = 1; index <=lastDayOfNowMonth; index++) {
        datesArray.push({"day":index,"month":month,"year":year})
        
      }
      // 加入下个月日期
      let countOfNextMonth=42-lastDayOfNowMonth-day
      for (let index = 1; index <=42-lastDayOfNowMonth-day; index++) {
          if(month == 12){
            datesArray.push({"day":index,"month":1,"year":year-1})
          }else{
            datesArray.push({"day":index,"month":month+1,"year":year})
          }
          
      }
      console.log(datesArray)
    return {
      year:year,
      nowDay:nowDay,
      month:month,
      datesArray:datesArray
    }
  }

  getClickDay(clickDay) {
    console.log('click',clickDay,clickDay.year,clickDay.month)
    this.activeDay=clickDay
    return clickDay;
  }

  constructor() {
  let date=new　Date()  
  this.year=date.getFullYear()
  this.month=date.getMonth()+1
   }
   
  ngOnInit() {
    
   this.dateObject=this.getDatesOfMonth(this.year,this.month)
  }

}