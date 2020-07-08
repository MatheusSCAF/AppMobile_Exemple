import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentToastPage } from './component-toast.page';

describe('ComponentToastPage', () => {
  let component: ComponentToastPage;
  let fixture: ComponentFixture<ComponentToastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentToastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentToastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
