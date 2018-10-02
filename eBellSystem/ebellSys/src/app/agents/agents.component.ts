import { Component, OnInit } from '@angular/core';
import { AgentlistService } from '../agentlist.service';
import { IAgent } from '../agents';
import { Router } from '@angular/router';

import { GetbalanceService } from '../getbalance.service';


@Component({
  selector: 'app-agents',
  templateUrl: "./agents.component.html",
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {
  public agents: IAgent[] = [];
  public balance = [];
  error: string;

  data: string;
  constructor(private _agent: AgentlistService, private route: Router, private _balance: GetbalanceService) { }

  onClick(id: number) {
    this.route.navigate(['test', id]);
  }
  ngOnInit() {

    this._balance.getBalance().subscribe(data => this.balance = data);
    this._agent.getAgents().subscribe(data => this.agents = data,
      error => this.error = error
    );
  }

}
