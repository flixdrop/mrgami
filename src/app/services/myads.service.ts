import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyadsService {

  constructor() { }

  // data: Object[] = [{
  //   imgUrl: 'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpcnklMjBjb3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
  //   animal: 'COW',
  //   breed: 'Jersy',
  //   location: "1",
  //   status: 'NA',
  //   milkPerDay: 'NA',
  //   age: 'NA',
  //   calf: 'NA'
  // },
  // {
  //   imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Murrah_buffalo.JPG',
  //   animal: 'Buffalo',
  //   breed: 'Jersy',
  //   location: "2",
  //   status: 'NA',
  //   milkPerDay: 'NA',
  //   age: 'NA',
  //   calf: 'NA'
  // },
  // {
  //   imgUrl:'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg',
  //   animal: 'COW',
  //   breed: 'Jersy',
  //   location: "3",
  //   status: 'NA',
  //   milkPerDay: 'NA',
  //   age: 'NA',
  //   calf: 'NA'
  // }];

  data: Object[] = [
    {
      imgUrl: [
        'https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpcnklMjBjb3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        'https://images.pexels.com/photos/4909807/pexels-photo-4909807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://frontiersinblog.files.wordpress.com/2021/06/frontiers-bioengineering-biotechnology-cow-rumen-microbes-source-of-novel-enzymes-breaking-down-plastic-waste.jpg?w=1200',
      ],
      animal: 'COW',
      breed: 'Jersy',
      location: '1',
      status: 'NA',
      milkPerDay: 'NA',
      age: 'NA',
      calf: 'NA',
    },
    {
      imgUrl: [
        'https://upload.wikimedia.org/wikipedia/commons/8/8e/Murrah_buffalo.JPG',
        'https://res.cloudinary.com/roundglass/image/upload/c_fill,ar_16:9,g_auto/w_1920,q_auto:best,f_auto/v1585055391/roundglass/sustain/Kaziranga_Buffalo-Arindam-Bhattacharya-copy-2-1_t8tykb.jpg',
        'https://media.istockphoto.com/photos/cape-buffalo-picture-id167451492',
      ],
      animal: 'BUFFALO',
      breed: 'Jersy',
      location: '2',
      status: 'NA',
      milkPerDay: 'NA',
      age: 'NA',
      calf: 'NA',
    },
    {
      imgUrl: [
        'https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg',
        'https://res.cloudinary.com/roundglass/image/upload/c_fill,ar_16:9,g_auto/w_1920,q_auto:best,f_auto/v1585055391/roundglass/sustain/Kaziranga_Buffalo-Arindam-Bhattacharya-copy-2-1_t8tykb.jpg',
        'https://media.istockphoto.com/photos/cape-buffalo-picture-id167451492',
      ],
      animal: 'COW',
      breed: 'Jersy',
      location: '3',
      status: 'NA',
      milkPerDay: 'NA',
      age: 'NA',
      calf: 'NA',
    },
  ];

  getAnimalData(data) {
    let dataArray = [...data];
    return dataArray;
  }
}
