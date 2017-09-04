import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { XHRBackend, RequestOptions, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { Configuration } from './app.constants';
import { LoggedInGuard } from './login-guard';
import { CustomLoader } from './customComponent/loader.component';
import { PnfComponent } from './pnf/pnf.component';
import { FootComponent } from './foot/foot.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsService } from './departments/departments.service';
import { AsComponent } from './departments/children/as/as.component';
import { CseComponent } from './departments/children/cse/cse.component';
import { EceComponent } from './departments/children/ece/ece.component';
import { EeeComponent } from './departments/children/eee/eee.component';
import { ItComponent } from './departments/children/it/it.component';
import { SbaComponent } from './sba/sba.component';
// import { DAboutComponent } from './departments/children/d-about/d-about.component';
// import { DFacultyComponent } from './departments/children/d-faculty/d-faculty.component';
// import { DLabComponent } from './departments/children/d-lab/d-lab.component';
// import { DFpubsComponent } from './departments/children/d-fpubs/d-fpubs.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FLibraryComponent } from './f-library/f-library.component';
import { FHostelComponent } from './f-hostel/f-hostel.component';
import { FMedComponent } from './f-med/f-med.component';
import { FBookComponent } from './f-book/f-book.component';
import { FSemhallComponent } from './f-semhall/f-semhall.component';
import { FSportsComponent } from './f-sports/f-sports.component';
import { FCanteenComponent } from './f-canteen/f-canteen.component';
import { FEduComponent } from './f-edu/f-edu.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { StudentComponent } from './student/student.component';
import { PlacementsComponent } from './placements/placements.component';
import { AProfileComponent } from './about/children/a-profile/a-profile.component';
import { ATrustComponent } from './about/children/a-trust/a-trust.component';
import { AVmComponent } from './about/children/a-vm/a-vm.component';
import { APillarsComponent } from './about/children/a-pillars/a-pillars.component';
import { ACertiComponent } from './about/children/a-certi/a-certi.component';
import { ACMessageComponent } from './about/children/a-c-message/a-c-message.component';
import { APMessageComponent } from './about/children/a-p-message/a-p-message.component';
import { PTeamComponent } from './placements/children/p-team/p-team.component';
import { PTrainingComponent } from './placements/children/p-training/p-training.component';
import { PRecComponent } from './placements/children/p-rec/p-rec.component';
import { PTalkComponent } from './placements/children/p-talk/p-talk.component';
import { PTourComponent } from './placements/children/p-tour/p-tour.component';
import { PPlacedComponent } from './placements/children/p-placed/p-placed.component';
import { SExamComponent } from './student/children/s-exam/s-exam.component';
import { SEventsComponent } from './student/children/s-events/s-events.component';
import { SPubsComponent } from './student/children/s-pubs/s-pubs.component';
import { SProjectsComponent } from './student/children/s-projects/s-projects.component';
import { SAchieveComponent } from './student/children/s-achieve/s-achieve.component';
import { SSocietyComponent } from './student/children/s-society/s-society.component';
import { SSportsComponent } from './student/children/s-sports/s-sports.component';
import { BtechComponent } from './btech/btech.component';
import { DisclosuresComponent } from './disclosures/disclosures.component';
import { NbaComponent } from './nba/nba.component';
import { NirfComponent } from './nirf/nirf.component';

import { FacultyComponent } from './faculty/faculty.component';

//after faculty login 
import { EventsComponent } from './faculty/children/events/events.component';
import { FacultyPubComponent } from './faculty/children/facultyPub/facultyPub.component';
import { MaterialComponent } from './faculty/children/material/material.component';
import { NewsComponent } from './faculty/children/news/news.component';
import { NoticesComponent } from './faculty/children/notices/notices.component';
import { StudentProjComponent } from './faculty/children/studentProj/studentProj.component';
import { StudentPubComponent } from './faculty/children/studentPub/studentPub.component';
import { TimetableComponent } from './faculty/children/timetable/timetable.component';

import { CustomHttpService } from "./default.header.service";
import { LessonPlanComponent } from './faculty/children/lesson-plan/lesson-plan.component';
import { SelfLearningComponent } from './faculty/children/self-learning/self-learning.component';

export var AuthToken:any;

export const firebaseConfig = {
  apiKey: "AIzaSyCUjbJaDoJGl09DQa96j3EVXSjJgIbVQU4",
  authDomain: "bpit-8740d.firebaseapp.com",
  databaseURL: "https://bpit-8740d.firebaseio.com",
  storageBucket: "bpit-8740d",
  messagingSenderId: "835679118973"
};

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'btech', component: BtechComponent },
  { path: 'aboutus', component: AboutComponent,
    children: [
      {path: 'collegeprofile', component:AProfileComponent},
      {path: 'trust', component:ATrustComponent},
      {path: 'visionandmission', component:AVmComponent},
      {path: 'pillars', component:APillarsComponent},
      {path: 'certifications', component:ACertiComponent},
      {path: 'chairmansmessage', component:ACMessageComponent},
      {path: 'principalsmessage', component:APMessageComponent},
      { path: '',
        redirectTo: '/aboutus/collegeprofile',
        pathMatch: 'full'
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'disclosures', component: DisclosuresComponent },  
  { path: 'nba', component: NbaComponent },
  { path: 'nirf', component: NirfComponent },    
  { path: 'student', component: StudentComponent,
    children: [
      {path: 'examinations', component:SExamComponent},
      {path: 'events', component:SEventsComponent},
      {path: 'publications', component:SPubsComponent},
      {path: 'projects', component:SProjectsComponent},
      {path: 'achievments', component:SAchieveComponent},
      {path: 'societies', component:SSocietyComponent},
      {path: 'sports', component:SSportsComponent},
      { path: '',
        redirectTo: '/student/events',
        pathMatch: 'full'
      },
    ]
  },
  { path: 'placements', component: PlacementsComponent,
    children: [
      {path: 'team', component:PTeamComponent},
      {path: 'training', component:PTrainingComponent},
      {path: 'recruiters', component:PRecComponent},
      {path: 'talksandseminars', component:PTalkComponent},
      {path: 'toursandworkshops', component:PTourComponent},
      {path: 'studentsplaced', component:PPlacedComponent},
      { path: '',
        redirectTo: '/placements/team',
        pathMatch: 'full'
      },
    ]
  },
  { path: 'departments', component: DepartmentsComponent,
    children: [
      // {path: 'about', component:DAboutComponent},
      // {path: 'faculty', component:DFacultyComponent},
      // {path: 'lab', component:DLabComponent},
      // {path: 'faculty-publications',component:DFpubsComponent},
      // { path: '',
      //   redirectTo: '/departments/about',
      //   pathMatch: 'full'
      // },
      {path: 'as',component:AsComponent},
      {path: 'cse',component:CseComponent},
      {path: 'ece',component:EceComponent},
      {path: 'eee',component:EeeComponent},
      {path: 'it',component:ItComponent},
    ]
  },
  {path: 'sba',component:SbaComponent},
  { path: 'facilities', component: FacilitiesComponent,
    children: [
      {path: 'library', component:FLibraryComponent},
      {path: 'hostel', component:FHostelComponent},
      {path: 'medicalroom', component:FMedComponent},
      {path: 'bookbank', component:FBookComponent},
      {path: 'seminarhall', component:FSemhallComponent},
      {path: 'EDUSAT', component:FEduComponent},
      {path: 'sportsroom', component:FSportsComponent},
      {path: 'canteen', component:FCanteenComponent},
      { path: '',
        redirectTo: '/facilities/library',
        pathMatch: 'full'
      },
    ]
  },
  { path: 'faculty', component: FacultyComponent , canActivate:[LoggedInGuard],
  children: [
      {path: 'events', component:EventsComponent},
      {path: 'facultyPub', component:FacultyPubComponent},
      {path: 'material', component:MaterialComponent},
      {path: 'news', component:NewsComponent},
      {path: 'notices', component:NoticesComponent},
      {path: 'studentProj', component:StudentProjComponent},
      {path: 'studentPub', component:StudentPubComponent},
      {path: 'timetable', component:TimetableComponent},
      {path: 'selfLearning', component:SelfLearningComponent},
      {path: 'lessonPlan', component:LessonPlanComponent}
  ]
},  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PnfComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CustomLoader,
    HomeComponent,
    PnfComponent,
    FootComponent,
    DepartmentsComponent,
    AsComponent,
    CseComponent,
    EceComponent,
    EeeComponent,
    ItComponent,
    // DAboutComponent,
    // DFacultyComponent,
    // DLabComponent,
    // DFpubsComponent,
    FacilitiesComponent,
    FLibraryComponent,
    FHostelComponent,
    FMedComponent,
    FBookComponent,
    FSemhallComponent,
    FSportsComponent,
    FCanteenComponent,
    FEduComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    StudentComponent,
    PlacementsComponent,
    AProfileComponent,
    ATrustComponent,
    AVmComponent,
    APillarsComponent,
    ACertiComponent,
    ACMessageComponent,
    APMessageComponent,
    PTeamComponent,
    PTrainingComponent,
    PRecComponent,
    PTalkComponent,
    PTourComponent,
    PPlacedComponent,
    SExamComponent,
    SEventsComponent,
    SPubsComponent,
    SProjectsComponent,
    SAchieveComponent,
    SSocietyComponent,
    SSportsComponent,
    BtechComponent,
    SbaComponent,
    DisclosuresComponent,
    NbaComponent,
    NirfComponent,
    FacultyComponent,
    EventsComponent,
    FacultyPubComponent,
    MaterialComponent,
    NewsComponent,
    NoticesComponent,
    StudentProjComponent,
    StudentPubComponent,
    TimetableComponent,
    LessonPlanComponent,
    SelfLearningComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    Configuration,
    DepartmentsService,
    LoggedInGuard,
    CustomHttpService,
    //     {
    //   provide: CustomHttpService,
    //   useFactory: function(backend: XHRBackend, defaultOptions: RequestOptions){
    //     return new CustomHttpService(backend, defaultOptions);
    //   },
    //   deps: [XHRBackend, RequestOptions]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
