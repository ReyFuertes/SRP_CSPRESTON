import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactsComponent } from './view-contacts.component';

describe('ViewContactsComponent', () => {
  let component: ViewContactsComponent;
  let fixture: ComponentFixture<ViewContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
