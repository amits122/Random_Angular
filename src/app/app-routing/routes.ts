import { Routes } from '@angular/router';
import { RangeComponent } from '../range/range.component';
import { GraphComponent } from '../graph/graph.component';
import { HomeComponent } from '../home/home.component';
import { BrightnessComponent } from '../brightness/brightness.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'range', component: RangeComponent },
    { path: 'graph',  component: GraphComponent },
    { path: 'brightness', component: BrightnessComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];