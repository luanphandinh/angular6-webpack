import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Go1CardComponent } from './go1-card.component';

describe('Go1CardComponent', () => {
  let component: Go1CardComponent;
  let fixture: ComponentFixture<Go1CardComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Go1CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Go1CardComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display overview correctly', () => {
    component.subtitle = 'Card Overview';
    component.ngOnInit();
    expect(component.subtitle).toBe('Card Overview');
    fixture.detectChanges();
    expect(element.querySelector('.go1-card--content-overview div').textContent).toBe('Card Overview');

    component.subtitle = undefined;
    component.ngOnInit();
    expect(component.subtitle).toBe(undefined);
    fixture.detectChanges();
    expect(element.querySelector('.go1-card--content-overview')).toBe(null);
  });

  it('should show image', () => {
    // component.image = 'http://image';
    // component.ngOnInit();
    // const imageUrl = component.getLogoStyle();
    // expect(imageUrl).toEqual({ backgroundImage: 'url(\'http://image\')' });
    // fixture.detectChanges();
    // expect(element.querySelector('.go1-card--cover').getAttribute('style')).toBe('background-image: url("http://image");');

    component.image = undefined;
    component.ngOnInit();
    expect(component.image).toBe(undefined);
    fixture.detectChanges();
    expect(element.querySelector('.go1-card--cover').getAttribute('style')).toBe('background-image: none;');
  });

  it('should show title', () => {
    component.title = 'Card Title';
    component.ngOnInit();
    expect(component.title).toBe('Card Title');
    fixture.detectChanges();
    expect(element.querySelector('.go1-card--content-title div').textContent).toBe('Card Title');

    component.title = undefined;
    component.ngOnInit();
    expect(component.title).toBe(undefined);
    fixture.detectChanges();
    expect(element.querySelector('.go1-card--content-title')).toBe(null);
  });

  it('should show subtitle', () => {
    component.overview = 'Card Subtitle';
    component.ngOnInit();
    expect(component.overview).toBe('Card Subtitle');
    fixture.detectChanges();
    expect(element.querySelector('.go1-card--content-author div').textContent).toBe('Card Subtitle');

    component.overview = undefined;
    component.ngOnInit();
    expect(component.overview).toBe(undefined);
    fixture.detectChanges();
    expect(element.querySelector('.go1-card--content-author')).toBe(null);
  });

  it('should show supporting text', () => {
    component.supportingText = 'Card supporting text';
    component.ngOnInit();
    expect(component.supportingText).toBe('Card supporting text');
    fixture.detectChanges();
    expect(element.querySelector('.go1-card--content-text').textContent).toBe('Card supporting text');

    component.supportingText = undefined;
    component.ngOnInit();
    expect(component.supportingText).toBe(undefined);
    fixture.detectChanges();
    expect(element.querySelector('.go1-card--content-text')).toBe(null);
  });

});
