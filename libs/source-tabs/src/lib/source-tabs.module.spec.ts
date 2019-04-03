import { async, TestBed } from '@angular/core/testing';
import { SourceTabsModule } from './source-tabs.module';

describe('SourceTabsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SourceTabsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SourceTabsModule).toBeDefined();
  });
});
