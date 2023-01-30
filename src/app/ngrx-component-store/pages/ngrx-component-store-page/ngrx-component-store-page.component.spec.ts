import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxComponentStorePageComponent } from './ngrx-component-store-page.component';

describe('NgrxComponentStorePageComponent', () => {
  let component: NgrxComponentStorePageComponent;
  let fixture: ComponentFixture<NgrxComponentStorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxComponentStorePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxComponentStorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
