import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InputTestPage } from './input-test.page';

describe('InputTestPage', () => {
  let component: InputTestPage;
  let fixture: ComponentFixture<InputTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InputTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
