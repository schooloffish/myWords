import { Component, OnInit } from '@angular/core';
import { PhraseService } from './phrase.service';

@Component({
    selector: 'wordlist',
    templateUrl: 'word.list.component.html'
})
export class WordListComponent {
    allPhrases: string[];
    audio: HTMLAudioElement;

    constructor(private phraseService: PhraseService) {
        this.allPhrases = [];
        this.audio = new Audio();
    }

    ngOnInit() {
        this.phraseService.getAllPhrases().then(data => {
            this.allPhrases = data;
        })
    }

    play(phrase: string): boolean {
        this.audio.pause();
        this.audio.src = `http://dict.youdao.com/dictvoice?audio=${phrase}&type=2`;
        this.audio.play();
        return false;
    }
}
