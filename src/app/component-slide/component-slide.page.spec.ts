import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentSlidePage } from './component-slide.page';

describe('ComponentSlidePage', () => {
  let component: ComponentSlidePage;
  let fixture: ComponentFixture<ComponentSlidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSlidePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentSlidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
