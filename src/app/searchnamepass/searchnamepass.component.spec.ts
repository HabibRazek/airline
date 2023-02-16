import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchnamepassComponent } from './searchnamepass.component';

describe('SearchnamepassComponent', () => {
  let component: SearchnamepassComponent;
  let fixture: ComponentFixture<SearchnamepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchnamepassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchnamepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
