import { computed, observable, action, useStrict } from 'mobx';
useStrict(true)

export class SentenceStore {
    @observable vocabularies = ['this is a test'];

    @action getAllSentence() {
        fetch('api/v1/allSentence').then((response) => {
            return response.json();
        }).then(action((data) => {
            this.vocabularies.replace(data);
        }));
    }
}