import { async, TestBed } from '@angular/core/testing';
import { NgxTableModule } from './ngx-table.module';

describe('NgxTableModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxTableModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgxTableModule).toBeDefined();
  });
});
