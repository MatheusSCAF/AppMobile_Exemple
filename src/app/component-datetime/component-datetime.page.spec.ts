import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentDatetimePage } from './component-datetime.page';

describe('ComponentDatetimePage', () => {
  let component: ComponentDatetimePage;
  let fixture: ComponentFixture<ComponentDatetimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDatetimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentDatetimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
