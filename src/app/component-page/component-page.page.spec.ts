import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentPagePage } from './component-page.page';

describe('ComponentPagePage', () => {
  let component: ComponentPagePage;
  let fixture: ComponentFixture<ComponentPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
