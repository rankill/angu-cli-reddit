import { BrowserModule }        from '@angular/platform-browser';
import { NgModule }             from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

// Routing
import { AppRoutingModule }     from './app-routing.module';


// Local components
import { AppComponent }         from './app.component';
import { PostsComponent }       from './components/posts/posts.component';
import { PostDetailComponent }  from './components/postsDetails/post-details.component';


// Services
import { RedditService }        from './shared/reddit.service';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RedditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
