import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComponentBadgesPage } from './component-badges.page';

describe('ComponentBadgesPage', () => {
  let component: ComponentBadgesPage;
  let fixture: ComponentFixture<ComponentBadgesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentBadgesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentBadgesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
