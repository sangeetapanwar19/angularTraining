
import { Component } from "@angular/core";
import { MainService } from "./main.service";
@Component({
    selector: 'courses',
    template: `<h1>Courses</h1>`
})
export class CoursesComponent{
    constructor(_serive: MainService){
        //let course = new MainService();
        console.log('course' , _serive.getCourses())
    }
}