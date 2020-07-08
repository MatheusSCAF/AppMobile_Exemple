import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentRefreshPage } from './component-refresh.page';

describe('ComponentRefreshPage', () => {
  let component: ComponentRefreshPage;
  let fixture: ComponentFixture<ComponentRefreshPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentRefreshPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentRefreshPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
