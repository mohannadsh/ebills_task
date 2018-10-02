import { TestBed } from '@angular/core/testing';

import { AgentlistService } from './agentlist.service';

describe('AgentlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentlistService = TestBed.get(AgentlistService);
    expect(service).toBeTruthy();
  });
});
