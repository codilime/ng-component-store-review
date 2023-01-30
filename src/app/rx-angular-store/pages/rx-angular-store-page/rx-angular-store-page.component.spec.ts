import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxAngularStorePageComponent } from './rx-angular-store-page.component';

describe('RxAngularStorePageComponent', () => {
  let component: RxAngularStorePageComponent;
  let fixture: ComponentFixture<RxAngularStorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxAngularStorePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxAngularStorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
