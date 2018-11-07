import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from 
   '@angular/material';



import { AppComponent } from './app.component';
import { LoginComponent } from '../pages/login/login.component';
import { HomeComponent } from '../pages/Home/home.component';
import { MuseumComponent } from '../pages/museum/museum.component';
import { UserService } from '../services/user.service';
import { MuseumService } from '../services/museum.service';
import { CreateComponent } from '../pages/create1/create.component';
import { ArtistComponent } from '../pages/create2/artist/artist.component';
import { ProviderComponent } from '../pages/create2/provider/provider.component';
import { NomalComponent } from '../pages/create2/normal/normal.component';
import { Create3Component } from '../pages/create3/create3.component';
import { Create4Component } from '../pages/create4/create4.component';
import { NavComponent } from '../pages/home/nav/nav.component';
import { FooterComponent } from '../pages/home/footer/footer.component';
import { TokenStorage } from '../services/token.storage';
import { Interceptor} from './app.interceptor';
import { UserComponent } from '../pages/user/user.component';
import { CommunityComponent } from '../pages/community/community.component';
import { NaverSpaceComponent } from '../pages/naver-space/naver-space.component';
import { SpaceService } from '../services/space.service';
import { SpaceList1Component } from '../pages/space-list1/space-list1.component';

import { ProjectService } from '../services/project.service';
import { QnaService } from '../services/qna.service';
import { QuestionListComponent } from '../pages/question-list/question-list.component';
import { CreateProjectComponent } from '../pages/create-project/create-project.component';
import { QuestionComponent } from '../pages/question/question.component';
import { SpaceComponent } from '../pages/space/space.component';
import { ProjectDetailComponent } from '../pages/project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MuseumComponent,
    CreateComponent,
    Create3Component,
    Create4Component,
    NavComponent,
    FooterComponent,
    ArtistComponent,
    ProviderComponent,
    NomalComponent,
    UserComponent,
    CommunityComponent,
    NaverSpaceComponent,
    SpaceList1Component,
    QuestionListComponent,
    CreateProjectComponent,
    QuestionComponent,
    SpaceComponent,
    ProjectDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'create', component: CreateComponent },
      { path: 'artist', component: ArtistComponent },
      { path: 'provider', component: ProviderComponent },
      { path: 'user', component: UserComponent },
      { path: 'create3', component: Create3Component },
      { path: 'create4', component: Create4Component },
      { path: 'login', component: LoginComponent },
      { path: 'museum', component: MuseumComponent },
      { path: 'community', component: CommunityComponent },
      { path: 'naver-space/:keyword', component: NaverSpaceComponent },
      { path: 'spaceList', component: SpaceList1Component },
      { path: 'questionList', component: QuestionListComponent },
      { path: 'create-project', component: CreateProjectComponent },
      { path: 'projectDetail/:id', component: CreateProjectComponent},
      { path: 'questionDetail/:id', component: QuestionComponent},
      { path: 'dbSpaceDetail/:id', component: SpaceComponent },
      
    ])
,
  ],
  providers: [UserService, MuseumService,TokenStorage,Interceptor, SpaceService, QnaService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
