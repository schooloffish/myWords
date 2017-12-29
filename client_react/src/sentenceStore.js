import { computed, observable, action } from 'mobx';

export class SentenceStore {
    @observable vocabularies = ['this is a test'];

    @action getAllSentence() {
        fetch('api/v1/allSentence').then((response) => {
            return response.json();
        }).then((data) => {
            this.vocabularies = data;
        });
    }
}