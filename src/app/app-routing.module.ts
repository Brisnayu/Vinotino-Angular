import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { VideosComponent } from './pages/videos/videos.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    data: {
      breadcrumb: {
        label: 'app home',
        info: 'home',
      },
    },
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'details/:id',
        data: {
          breadcrumb: {
            label: 'details',
            info: 'person',
          },
        },
        children: [
          {
            path: '',
            component: DetailsComponent,
          },
          {
            path: 'videos',
            data: {
              breadcrumb: {
                label: 'videos',
                info: 'ondemand_video',
              },
            },
            component: VideosComponent,
          },
        ],
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
