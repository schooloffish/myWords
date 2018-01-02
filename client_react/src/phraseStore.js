import { observable, action } from 'mobx';

export class PhraseStore {
    @observable phrase;
    @observable showMeaning = false;
    @observable example = '';
    @observable showNext = false;
    @observable showAddExample = false;

    constructor() {
        this.forget = this.forget.bind(this);
        this.exampleChange = this.exampleChange.bind(this);
        this.forget = this.forget.bind(this);
        this.remember = this.remember.bind(this);
        this.addExample = this.addExample.bind(this);
        this.next = this.next.bind(this);
    }

    @action next() {
        const randomId = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
        this.init(randomId);
    }

    @action init(id) {
        this.showMeaning = false;
        this.showAddExample = false;
        this.showNext = false;
        fetch('/api/v1/phrase/' + id).then(res => res.json()).then(action((data => {
            this.phrase = data;
        })));
    }

    @action remember() {
        this.next();
    }

    @action forget() {
        this.showMeaning = !this.showMeaning;
        this.showNext = !this.showNext;
    }

    @action exampleChange(e) {
        this.example = e.target.value;
    }

    @action addExample(id, example) {
        fetch('api/v1/phrase/', {
            method: 'POST', body: {
                phraseId: id,
                sentence: example
            }
        })
    }
}