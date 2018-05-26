import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  styleUrls: ['./example.component.css'],
  template: `
    <go1-card
      [image]="data.image"
      [overview]="data.overview"
      [title]="data.title"
      [subtitle]="data.subtitle"
      [supportingText]="data.supportingText"
      [isHover]="data.isHover"
      [cardObject]="data.data">
    </go1-card>
  `,
})

export class ExampleComponent {
  data = {
    overview: '14 lessons &#x25cf; 24 hours',
    title: 'consectetur augue sit amet mauris suscipit aliquam. ' +
    'Fusce id nulla ac erat aliquet porta. ' +
    'Donec eu metus et enim hendrerit venenatis et at quam. ' +
    'Aliquam accumsan imperdiet lorem, sed ullamcorper eros fermentum ut',
    supportingText: 'Free',
    subtitle: 'consectetur augue sit amet mauris suscipit aliquam.' +
    ' Fusce id nulla ac erat aliquet porta. ' +
    'Donec eu metus et enim hendrerit venenatis et at quam.' +
    ' Aliquam accumsan imperdiet lorem, sed ullamcorper eros fermentum ut',
    data: {
      type: 'course',
      id: 20,
    },
    image: 'https://res.cloudinary.com/go1/image/fetch/w_230,h_130,c_thumb,g_auto' +
    '/https://www.opensesame.com/system/files/styles/co' +
    'urse_details_main_image/s3/images/SVI/OC Intro Cover Image.jpg',
    isHover: true,
  };
}
