import {Component, OnInit} from '@angular/core';
import {WebsocketService} from "./service/websocket.service";
import {VoterResponseDto} from "./dto/VoterResponseDto";
import { FormBuilder } from '@angular/forms';
import {CandidateResponseDto} from "./dto/CandidateResponseDto";
import {HttpService} from "./service/http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private websocketService: WebsocketService,
              private httpService: HttpService,
              private formBuilder: FormBuilder) {}

  title = 'vote-client';
  receivedVoters: VoterResponseDto[] = [];
  receivedCandidates: CandidateResponseDto[] = [];
  voterForm = this.formBuilder.group({});
  candidateForm = this.formBuilder.group({});
  voteForm = this.formBuilder.group({});

  ngOnInit() {
    this.websocketService.watch('/topic/voter').subscribe((message) => {
      console.log(message.body);
      this.receivedVoters = <VoterResponseDto []> JSON.parse(message.body);
    });
    this.websocketService.watch('/topic/candidate').subscribe((message) => {
      console.log(message.body);
      this.receivedCandidates = <CandidateResponseDto []> JSON.parse(message.body);
    });
    this.websocketService.publish({destination:'/app/voter'})
    this.websocketService.publish({destination:'/app/candidate'})
  }

  addVoter() {
    let voterName = (<HTMLInputElement>document.getElementById("voterName")).value;
    if (voterName != '') {
      this.httpService.addVoter({name: voterName});
    }
  }

  removeVoter(voterId: number) {
    console.log('removeVoter')
    this.httpService.removeVoter(voterId);
  }

  addCandidate() {
    let candidateName = (<HTMLInputElement>document.getElementById("candidateName")).value;
    if (candidateName != '') {
      this.httpService.addCandidate({name: candidateName});
    }
  }

  removeCandidate(candidateId: number) {
    console.log('removeCandidate')
    this.httpService.removeCandidate(candidateId);
  }

  vote() {
    let voterId = Number.parseInt((<HTMLInputElement>document.getElementById("voterId")).value);
    let candidateId = Number.parseInt((<HTMLInputElement>document.getElementById("candidateId")).value);
    if ( voterId > 0 && candidateId > 0) {
      this.httpService.vote({voterId: voterId, candidateId: candidateId});
    }
  }
}
