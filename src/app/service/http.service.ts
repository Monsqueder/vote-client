import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {VoterRequestDto} from "../dto/VoterRequestDto";
import {CandidateRequestDto} from "../dto/CandidateRequestDto";
import {VoteRequestDto} from "../dto/VoteRequestDto";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  addVoter(voter: VoterRequestDto): void {
    this.httpClient.post('http://localhost:8080/voter', voter)
      .subscribe({
        next: () => {
          console.log('Post successful');
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }

  removeVoter(voterId: number): void {
    this.httpClient.delete('http://localhost:8080/voter/' + voterId)
      .subscribe({
        next: () => {
          console.log('Delete successful');
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }

  addCandidate(candidate: CandidateRequestDto): void {
    this.httpClient.post('http://localhost:8080/candidate', candidate)
      .subscribe({
        next: () => {
          console.log('Post successful');
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }

  removeCandidate(candidateId: number): void {
    this.httpClient.delete('http://localhost:8080/candidate/' + candidateId)
      .subscribe({
        next: () => {
          console.log('Delete successful');
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }

  vote(voteRequestDto: VoteRequestDto): void {
    this.httpClient.post('http://localhost:8080/vote', voteRequestDto)
      .subscribe({
        next: () => {
          console.log('Post successful');
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }
}
