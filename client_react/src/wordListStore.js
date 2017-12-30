import { observable, action, useStrict } from 'mobx';

useStrict(true);

export class WordListStore {
    @observable allPhrases = [];

    @action getAllPhrases() {
        fetch('api/v1/allphrases').then((response) => {
            return response.json();
        }).then(action((data) => {
            this.allPhrases = data;
        }));
    }
}