import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface Good {
  name: string;
  tel: string;
  addr: String;
  date: String;
  index: number;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  goodList: Array<Good>;

  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([
      {
        name: 'author', content: 'anasit.com'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ]);
  }

  initGoodData() {
    this.goodList = [
      {name: 'Lily', tel: '152-XXXX-8861', addr: 'DaLian Soft Park', date: '2017-3-23', index: 0},
      {name: 'Elizabeth', tel: '156-XXXX-7623', addr: 'DaLian Soft Park', date: '2017-6-15', index: 1},
      {name: 'Camille', tel: '189-XXXX-0959', addr: 'DaLian Soft Park', date: '2017-1-28', index: 2},
      {name: 'Christina', tel: '189-XXXX-8735', addr: 'DaLian Soft Park', date: '2017-8-6', index: 3},
      {name: 'Darcy', tel: '139-XXXX-9484', addr: 'DaLian Soft Park', date: '2017-9-26', index: 4}
    ];
  }

  ngOnInit() {
      this.initGoodData();
  }

  onAscSortClick(): void {
    this.goodList.sort((g1, g2) => {
        return g1.index < g2.index ? 0 : 1;
    });
  }

  onDescSortClick(): void {
    this.goodList.sort((g1, g2) => {
      return g1.index < g2.index ? 1 : 0;
    });
  }

  onRandomSortClick(): void {
    this.goodList.sort((g1, g2) => {
      g1.index = Math.random();
      g2.index = Math.random();
      return g1.index < g2.index ? 1 : 0;
    });
  }

}
