import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { PaymentService } from '../payment.service';
import { ActivatedRoute } from '@angular/router';
import { AgentlistService } from '../agentlist.service';

import { GetbalanceService } from '../getbalance.service';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
    cities = ['Jenin', 'Ramallah', 'Nablus', 'Qalqilya', 'Salfit', 'Hebron', 'Tubas', 'Jericho'];
    userModel = new User("", "", null, "", "");
    errorMsg = '';
    public id: number;
    public agentName = "";
    public bills: number = 0;
    public agents = [];
    public balance = [];
    needEmail: boolean = true;
    modalHead: string = "";
    modalBody: string = "";
    data: string = "";
    validID: boolean;
    showError: boolean;
    constructor(private _paymentsevice: PaymentService, private _route: ActivatedRoute, private _balance: GetbalanceService, private _agent: AgentlistService) { }

    ngOnInit() {


        this.id = parseInt(this._route.snapshot.paramMap.get('a'));
        this.checkID(this.id);
        this._balance.getBalance().subscribe(data => this.balance = data,

        );
        this._agent.getAgents().subscribe(data => this.agents = data,
            err => console.error(err),
            () => this.check()

        );
        this._paymentsevice.pay(this.userModel).subscribe(
            data => this.modalHead = data.result,
            error => this.errorMsg = error.statusText

        )

    }
    checkID(id: number) {
        if (id % 2 == 0) {
            this.needEmail = false;
        }
    }
    check() {
        for (let i = 0; i < this.agents.length; i++) {
            if (parseInt(this.agents[i].id) == (this.id)) {
                this.bills = (this.agents[i].bills);
                this.agentName = (this.agents[i].name);
                this.validID = true;

            }

        }
        if (this.validID) {
            this.showError = true;
        }
    }
    onSubmit() {

        if (this.balance[0].balance > this.bills) {


            this.modalBody = "operation done successfully";


        } else {
            this.modalBody = "operation is cancelled";
            this.modalHead = "balance is not enough your balance is " + this.balance[0].balance + " and your bills are " + this.bills;
        }

    }
}
